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

// This component is incomplete. Having trouble getting it to fetch the dropdown items again when category is changed.
// May need to fix later on to allow for better scalability

export default class NewScoreModal extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: {},
            selectedOption2: {},
            options1: [],
            options2: [],
            scores: [],
            selectedScore: {},
            date: moment(),
            c: "",
        };
    }

    componentWillMount() {
        this.getDropdownData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.scoreCategory !== this.props.scoreCategory) {
            this.getDropdownData();
        }
    }

    //firebase fetch
    getDropdownData() {
        var ref = firebase.database().ref();
        let rootRef;
        let rootRef2;
        let rootRef3;
        let rootRef4;
        console.log(`Modal changed with ${this.props.scoreCategory}`);

        // Get the rootRefs based on the current selected category
        if (this.props.scoreCategory === 'Impairment of Body Functions') {

            rootRef = ref.child("impairment_of_body_functions").child("domain");
            rootRef2 = ref.child("impairment_of_body_functions").child("subDomain");
            rootRef3 = ref.child("Functional_Scores").child("impairment_of_body_functions");

        } else if (this.props.scoreCategory === 'Capacity and Performance') {

            rootRef = ref.child("capacity_and_performance").child("domain");
            rootRef2 = ref.child("capacity_and_performance").child("subDomain");
            rootRef3 = ref.child("Functional_Scores").child("capacity");
            rootRef4 = ref.child("Functional_Scores").child("performance");

            rootRef4.on("child_added", snapshot => {
                let scores_p = {
                    label: snapshot.val().label,
                    value: snapshot.val().value
                };
                this.setState(prevState => ({
                    scores_p: [...prevState.scores_p, scores_p]
                }));
            });

        } else if (this.props.scoreCategory === 'Environment') {
            console.log('Score category env');
            rootRef = ref.child("environment").child("domain");
            rootRef2 = ref.child("environment").child("subDomain");
            rootRef3 = ref.child("Functional_Scores").child("environment");

        }

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
        this.setState({ selectedOption });
    };

    handleChange2 = selectedOption => {
        this.setState({ selectedOption2: selectedOption });
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
            ...(this.state.selectedScore.value === 4) && { CompleteImpairment: 4 }
        };

        // TODO: Refreshing is not working, need to fix later
        this.props.handleCloseModal();
        postRef.push(object).then(() => {
            this.props.handleRefresh();
        }).catch((error) => {
            console.log(error);
        });
    };

    getCurrentUser() {
        let user = this.props.sessionStore.authUser.email;
        user = user.split('@')[0];
        return user;
    }

    render() {
        const filteredOptions = this.state.options2.filter(
            o => o.link === this.state.selectedOption.value
        );

        return (
            <div>
                <Modal
                    isOpen={!!this.props.selectedModal}
                    onRequestClose={this.props.handleCloseModal}
                    contentLabel="ScoreModal"
                    closeTimeoutMS={200}
                    className="modal"
                >
                    <Header name={"New " + this.props.scoreCategory + " Functional Score"} />

                    <p className="m-2">
                        <b>Select Domain</b>
                    </p>
                    <Select
                        className="m-2"
                        name="form-field-name"
                        value={this.state.selectedOption.querySelector}
                        onChange={this.handleChange1}
                        options={this.state.options1}
                    />

                    <p className="m-2">
                        <b>Select Subdomain</b>
                    </p>
                    <Select
                        className="m-2"
                        name="form-field-name"
                        value={this.state.selectedOption2.querySelector}
                        onChange={this.handleChange2}
                        options={filteredOptions}
                    />

                    <p className="m-2">
                        <b>Select Functional Score</b>
                    </p>
                    <Select
                        className="m-2"
                        name="form-field-name"
                        options={this.state.scores}
                        onChange={this.handleChange3}
                        value={this.state.selectedScore.querySelector}
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
                        onChange={this.handleChange4}
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
                        onClick={this.props.handleCloseModal}
                    >
                        Cancel
                    </button>
                </Modal>
            </div>
        );
    }
}

