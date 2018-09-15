import ReactDOM from "react-dom";
import React, { Component } from "react";
import * as firebase from "firebase";
import Select from "react-select";
import Dropdown from "react-dropdown";
import Header from "./Header.jsx";
import "./index.css";
import { FormControl } from "react-bootstrap";

class Impairement extends Component {
  constructor() {
    super();
    this.state = {
      name: "ScoreBoard-Impairment of Body Functions",
      selectedOption: {},
      selectedOption2: {},
      options1: [],
      options2: [],
      scores: [
        "0 - No Impairement",
        "1 - Mild Impairement",
        "2 - Moderate Impairement",
        "3 - Severe Impairement",
        "4 - Complete Impairemnt",
        "9 - Not Applicable"
      ],
      selectedScore: {},
      c: "",
      patientVal: "Patient-23"
    };
  }

  componentWillMount() {
    this.getnewData(66);
  }

  //firebase fetch
  getnewData(index) {
    var rootRef = firebase
      .database()
      .ref()
      .child("impairement_of_body_functions")
      .child("domain");

    var rootRef2 = firebase
      .database()
      .ref()
      .child("impairement_of_body_functions")
      .child("subDomain");

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

  handleSubmit = id => {
    console.log(id);

    var postRef = firebase
      .database()
      .ref()
      .child(this.state.patientVal)
      .child(this.state.name);

    const object = {
      score: this.state.selectedScore.value,
      domain: this.state.selectedOption.label,
      sub_Domain: this.state.selectedOption2.label,
      comment: this.state.c
    };
    console.log(object);
    alert("submitted");
    postRef.push(object);
  };

  handleHeader = () => {
    console.log("event handler called");
  };

  render() {
    const filteredOptions = this.state.options2.filter(
      o => o.link === this.state.selectedOption.value
    );

    return (
      <React.Fragment>
        <Header />

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
        <Dropdown
          className="m-2"
          name="form-field-name"
          placeholder="Select Score"
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

        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </React.Fragment>
    );
  }
}

export default Impairement;
