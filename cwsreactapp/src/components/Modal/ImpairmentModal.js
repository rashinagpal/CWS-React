import React, { Component } from "react";
import * as firebase from "firebase";
import Select from "react-select";
import Header from "../NewFunctionalScore/Header";
import { FormControl } from "react-bootstrap";
import "../.././styles.css";
import moment, { now } from "moment";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

export default class ImpairmentModal extends Component {
    constructor() {
        super();
        this.state = {
            name: "Impairment of Body Functions",
            selectedOption: {},
            selectedOption2: {},
            options1: [],
            options2: [],
            scores: [],
            selectedScore: {},
            date: moment(),
            c: "",
            patientVal: "0" // TODO: Update to dynamic patientVal
        };
    }

    componentWillMount() {
        console.log(this.props);
        this.getnewData(66);
    }

    //firebase fetch
    getnewData(index) {
        var Ref = firebase.database().ref();
        var rootRef = Ref.child("impairment_of_body_functions").child("domain");
        var rootRef2 = Ref.child("impairment_of_body_functions").child("subDomain");
        var rootRef3 = Ref.child("Functional_Scores").child("impairment_of_body_functions");

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
                value: snapshot.val().value
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
        this.getCurrentUser();
        this.setState({ selectedScore });
    };

    handleChange4 = e => {
        this.setState({ c: e.target.value });
    };

    handleDateChange = date => {
        this.setState({ date });
    };

    handleSubmit = id => {
        console.log(id);

        var postRef = firebase
            .database()
            .ref()
            .child("patient")
            .child(this.state.patientVal)
            .child("reports")
            .child(this.state.name);

        const object = {
            careProvider: this.getCurrentUser(),
            domain: this.state.selectedOption.label,
            subDomain: this.state.selectedOption2.label,
            comment: this.state.c,
            assessmentDate: this.state.date.format("DD-MMM-YY"),

            ...(this.state.selectedScore.value === '0') && { NoImpairment: 0 },
            ...(this.state.selectedScore.value === '1') && { MildImpairment: 1 },
            ...(this.state.selectedScore.value === '2') && { ModerateImpairment: 2 },
            ...(this.state.selectedScore.value === '3') && { SevereImpairment: 3 },
            ...(this.state.selectedScore.value === '4') && { CompleteImpairment: 4 }
        };
        alert("Report submitted successfully");
        postRef.push(object);
        this.props.handleCloseModal();
    };

    getCurrentUser() {
        let user = this.props.sessionStore.authUser.email;
        user = user.split('@')[0];
        return user;
    }

    // TODO: Pass in isSelected boolean in parent, create handleClose method in parent

    render() {
        const filteredOptions = this.state.options2.filter(
            o => o.link === this.state.selectedOption.value
        );

        return (
            <div>
                <Modal
                    isOpen={!!this.props.selectedModal}
                    onRequestClose={this.props.handleCloseModal}
                    contentLabel="Test"
                    closeTimeoutMS={200}
                    className="modal"
                >
                    <Header name="New Impairment of Body Functions Functional Score" />

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
                </Modal>
            </div>
        );
    }
}

