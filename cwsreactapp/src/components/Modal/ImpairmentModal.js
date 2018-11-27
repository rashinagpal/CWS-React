import React, { Component } from "react";
import * as firebase from "firebase";
import Select from "react-select";
import Header from "../NewFunctionalScore/Header";
import { FormControl } from "react-bootstrap";
import "../.././styles.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

export default class ImpairmentModal extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: undefined,
            selectedOption2: undefined,
            options1: [],
            options2: [],
            scores: [],
            selectedScore: undefined,
            date: moment(),
            c: "",
        };
    }

    componentWillMount() {
        this.getDropdownData();
    }

    //firebase fetch
    getDropdownData() {
        var ref = firebase.database().ref();
        let rootRef = ref.child("impairment_of_body_functions").child("domain");
        let rootRef2 = ref.child("impairment_of_body_functions").child("subDomain");
        let rootRef3 = ref.child("Functional_Scores").child("impairment_of_body_functions");

        rootRef.on("child_added", snapshot => {
            let element = {
                label: snapshot.val().label,
                value: snapshot.val().value
            };
            this.setState(prevState => ({
                options1: [...prevState.options1, element]
            }));
        });

        rootRef2.on("child_added", snapshot => {
            let element2 = {
                label: snapshot.val().label,
                link: snapshot.val().link,
                value: snapshot.val().value,
                id: snapshot.val().id
            };
            this.setState(prevState => ({
                options2: [...prevState.options2, element2]
            }));
        });

        rootRef3.on("child_added", snapshot => {
            let scores = {
                label: snapshot.val().label,
                value: snapshot.val().value
            };
            this.setState(prevState => ({
                scores: [...prevState.scores, scores]
            }));
        });
    }

    onPatientChange = newVal => {
        this.setState({ patientVal: newVal });
    };
    handleChange1 = selectedOption => {
        this.setState({ selectedOption, selectedOption2: null });
    };

    handleChange2 = selectedOption2 => {
        this.setState({ selectedOption2 });
    };

    handleChange3 = selectedScore => {
        this.setState({ selectedScore });
    };

    handleChange4 = e => {
        this.setState({ c: e.target.value });
    };

    handleDateChange = date => {
        this.setState({ date });
    };

    handleSubmit = id => {
        if (this.requiredFieldsFilled()) {
            var postRef = firebase
                .database()
                .ref()
                .child("patient")
                .child(this.props.patient)
                .child("reports")
                .child(this.props.scoreCategory);

            const object = {
                careProvider: this.getCurrentUser(),
                domain: this.state.selectedOption.label,
                subDomain: this.state.selectedOption2.label,
                comment: this.state.c,
                assessmentDate: this.state.date.format("DD-MMM-YY"),
                id: this.state.selectedOption2.id,

                ...(this.state.selectedScore.value === 0) && { NoImpairment: 0 },
                ...(this.state.selectedScore.value === 1) && { MildImpairment: 1 },
                ...(this.state.selectedScore.value === 2) && { ModerateImpairment: 2 },
                ...(this.state.selectedScore.value === 3) && { SevereImpairment: 3 },
                ...(this.state.selectedScore.value === 4) && { CompleteImpairment: 4 },
                ...(this.state.selectedScore.value === 9) && { NotApplicable: 9 }
            };

            this.onCloseModal();
            postRef.push(object).then(() => {
                this.props.handleRefresh();
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    getCurrentUser() {
        let user = this.props.sessionStore.authUser.email;
        user = user.split('@')[0];
        return user;
    }

    onCloseModal = () => {
        // Uncache the score and comment
        this.setState({ 
            selectedScore: undefined,
            c: "",
            showError: false
        });

        this.props.handleCloseModal();
    }

    requiredFieldsFilled() {
        if (!this.state.selectedOption || !this.state.selectedOption2 || !this.state.selectedScore) {
            this.setState({ showError: true });
            return false;
        } else {
            this.setState({ showError: false });
            return true;
        }
    }

    render() {
        let filteredOptions;

        if (this.state.selectedOption) {
            filteredOptions = this.state.options2.filter(
                o => o.link === this.state.selectedOption.value
            );
        }

        return (
            <div>
                <Modal
                    ariaHideApp={false}
                    isOpen={!!this.props.selectedModal}
                    onRequestClose={this.onCloseModal}
                    contentLabel="ScoreModal"
                    closeTimeoutMS={200}
                    className="modal"
                >
                    <Header name={"New " + this.props.scoreCategory + " Functional Score"} />

                    {this.state.showError ? <p className="required">Please fill in the required fields</p> : null}

                    <p className="m-2">
                        <span className="required">* </span>
                        <b>Select Domain</b>
                    </p>
                    <Select
                        className="m-2"
                        name="form-field-name"
                        value={this.state.selectedOption}
                        onChange={this.handleChange1}
                        options={this.state.options1}
                    />

                    <p className="m-2">
                        <span className="required">* </span>
                        <b>Select Subdomain</b>
                    </p>
                    <Select
                        className="m-2"
                        name="form-field-name"
                        value={this.state.selectedOption2}
                        onChange={this.handleChange2}
                        options={filteredOptions}
                    />

                    <p className="m-2">
                        <span className="required">* </span>
                        <b>Select Functional Score</b>
                    </p>
                    <Select
                        className="m-2"
                        name="form-field-name"
                        options={this.state.scores}
                        onChange={this.handleChange3}
                        value={this.state.selectedScore}
                    />

                    <p className="m-2">
                        <b>Comment</b>
                    </p>

                    <FormControl
                        type="text"
                        placeholder="Enter comment"
                        onChange={this.handleChange4}
                        value={this.state.c}
                    />

                    <p className="m-2">
                        <b>Select Assessment Date</b>
                    </p>
                    <DatePicker
                        className="m-2"
                        name="form-field-name"
                        selected={this.state.date}
                        onChange={this.handleDateChange}
                    />

                    <br />
                    <br />

                    <button
                        className="modal__button"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>

                    <button
                        className="modal__button"
                        onClick={this.onCloseModal}
                    >
                        Cancel
                    </button>
                </Modal>
            </div>
        );
    }
}

