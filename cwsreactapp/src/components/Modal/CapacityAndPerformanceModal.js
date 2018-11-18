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

export default class CapacityAndPerformanceModal extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: undefined,
            selectedOption2: undefined,
            options1: [],
            options2: [],
            scores_c: [],
            scores_p: [],
            selectedScore_c: undefined,
            selectedScore_p: undefined,
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
        let rootRef = ref.child("capacity_and_performance").child("domain");
        let rootRef2 = ref.child("capacity_and_performance").child("subDomain");
        let rootRef3 = ref.child("Functional_Scores").child("capacity");
        let rootRef4 = ref.child("Functional_Scores").child("performance");

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
            let scores_c = {
                label: snapshot.val().label,
                value: snapshot.val().value
            };
            this.setState(prevState => ({
                scores_c: [...prevState.scores_c, scores_c]
            }));
        });

        rootRef4.on("child_added", snapshot => {
            let scores_p = {
                label: snapshot.val().label,
                value: snapshot.val().value
            };
            this.setState(prevState => ({
                scores_p: [...prevState.scores_p, scores_p]
            }));
        });
    }

    onPatientChange = newVal => {
        this.setState({ patientVal: newVal });
    };
    handleChange1 = selectedOption => {
        this.setState({ selectedOption });
    };

    handleChange2 = selectedOption2 => {
        this.setState({ selectedOption2 });
    };

    handleChange3 = selectedScore_c => {
        this.setState({ selectedScore_c });
    };

    handleChange4 = selectedScore_p => {
        this.setState({ selectedScore_p });
    };

    handleChange5 = e => {
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
                capacitycomment: this.state.c,
                assessmentDate: this.state.date.format("DD-MMM-YY"),
                id: this.state.selectedOption2.id,

                ...(this.state.selectedScore_c.value == 0) && { NoImpairmentC: 0 },
                ...(this.state.selectedScore_c.value == 1) && { MildImpairmentC: 1 },
                ...(this.state.selectedScore_c.value == 2) && { ModerateImpairmentC: 2 },
                ...(this.state.selectedScore_c.value == 3) && { SevereImpairmentC: 3 },
                ...(this.state.selectedScore_c.value == 4) && { CompleteImpairmentC: 4 },
                ...(this.state.selectedScore_c.value == 9) && { NotApplicableC: 9 },

                ...(this.state.selectedScore_p.value == 0) && { NoImpairmentP: 0 },
                ...(this.state.selectedScore_p.value == 1) && { MildImpairmentP: 1 },
                ...(this.state.selectedScore_p.value == 2) && { ModerateImpairmentP: 2 },
                ...(this.state.selectedScore_p.value == 3) && { SevereImpairmentP: 3 },
                ...(this.state.selectedScore_p.value == 4) && { CompleteImpairmentP: 4 },
                ...(this.state.selectedScore_p.value == 9) && { NotApplicableP: 9 },
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
            selectedScore_c: undefined,
            selectedScore_p: undefined,
            c: "",
            showError: false
        });

        this.props.handleCloseModal();
    }

    requiredFieldsFilled() {
        if (!this.state.selectedOption || !this.state.selectedOption2 || !this.state.selectedScore_c || !this.state.selectedScore_p) {
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
                        <b>Select Functional Score - Capacity</b>
                    </p>
                    <Select
                        className="m-2"
                        name="form-field-name"
                        options={this.state.scores_c}
                        onChange={this.handleChange3}
                        value={this.state.selectedScore_c}
                    />

                    <p className="m-2">
                        <span className="required">* </span>
                        <b>Select Functional Score - Performance</b>
                    </p>
                    <Select
                        className="m-2"
                        name="form-field-name"
                        placeholder="Select Score"
                        options={this.state.scores_p}
                        onChange={this.handleChange4}
                        value={this.state.selectedScore_p}
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

                    <p className="m-2">
                        <b>Comment</b>
                    </p>

                    <FormControl
                        type="text"
                        placeholder="Enter comment"
                        onChange={this.handleChange5}
                        value={this.state.c}
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

