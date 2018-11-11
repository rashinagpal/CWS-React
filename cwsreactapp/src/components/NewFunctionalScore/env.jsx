import ReactDOM from "react-dom";
import React, { Component } from "react";
import * as firebase from "firebase";
import Select from "react-select";
import Dropdown from "react-dropdown";
import Header from "./Header";
import { FormControl } from "react-bootstrap";
import Navigation1 from "./Navigation1";
import "../.././styles.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

import withAuthorization from "../Session/withAuthorization";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";

class Environment extends Component {
  constructor() {
    super();
    this.state = {
      name: "Environment",
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
    this.getnewData(66);
  }

  //firebase fetch
  getnewData(index) {
    var ref = firebase.database().ref();
    var rootRef = ref.child("environment").child("domain");

    var rootRef2 = ref.child("environment").child("subDomain");

    var rootRef3 = ref.child("Functional_Scores").child("environment");
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
        value: snapshot.val().value,
      };
      this.setState(prevState => ({
        scores: [...prevState.scores, scores]
      }));
    });
  }

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

  handleSubmit = e => {
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
      id: this.state.selectedOption2.id,

      ...(this.state.selectedScore.value == -4) && { Completebarrier: -4 },
      ...(this.state.selectedScore.value == -3) && { Severebarrier: -3 },
      ...(this.state.selectedScore.value == -2) && { Moderatebarrier: -2 },
      ...(this.state.selectedScore.value == -1) && { Mildbarrier: -1 },

      ...(this.state.selectedScore.value == 0) && { Nobarrierfacilitator: 0 },
      ...(this.state.selectedScore.value == 1) && { Mildfacilitator: 1 },
      ...(this.state.selectedScore.value == 2) && { Moderatefacilitator: 2 },
      ...(this.state.selectedScore.value == 3) && { Substantialfacilitator: 3 },
      ...(this.state.selectedScore.value == 4) && { Completefacilitator: 4 }
    };
    alert("Report submitted successfully");
    postRef.push(object);
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
        <Navigation1 />
        <Header name="Environment" />

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
          placeholder="Select Score"
          options={this.state.scores}
          onChange={this.handleChange3}
          value={this.state.selectedScore}
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

        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject("sessionStore"),
  observer
)(Environment);
