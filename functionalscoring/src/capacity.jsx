import React, { Component } from "react";
import * as firebase from "firebase";
import Select from "react-select";
import Dropdown from "react-dropdown";
import { FormControl } from "react-bootstrap";

class Capacity extends Component {
  constructor() {
    super();
    this.state = {
      name: "ScoreBoard-Capacity and Performance",
      selectedOption: {},
      selectedOption2: {},
      options1: [],
      options2: [],
      scores_c: [
        "0 - No Impairement",
        "1 - Mild Impairement",
        "2 - Moderate Impairement",
        "3 - Severe Impairement",
        "4 - Complete Impairemnt",
        "9 - Not Applicable"
      ],
      scores_p: [
        "0 - No Impairement",
        "1 - Mild Impairement",
        "2 - Moderate Impairement",
        "3 - Severe Impairement",
        "4 - Complete Impairemnt",
        "9 - Not Applicable"
      ],
      selectedScore_c: {},
      selectedScore_p: {},
      c: "",
      patientVal: "Patient-25"
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
      .child("capacity_and_performance")
      .child("domain");

    var rootRef2 = firebase
      .database()
      .ref()
      .child("capacity_and_performance")
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

  handleChange1 = selectedOption => {
    this.setState({ selectedOption });
  };

  handleChange2 = selectedOption => {
    this.setState({ selectedOption2: selectedOption });
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

  handleSubmit = e => {
    console.log("submitted");
    var postRef = firebase
      .database()
      .ref()
      .child(this.state.patientVal)
      .child(this.state.name);
    const object = {
      score_capacity: this.state.selectedScore_c.value,
      score_performance: this.state.selectedScore_p.value,
      domain: this.state.selectedOption.label,
      sub_Domain: this.state.selectedOption2.label,
      comment: this.state.c
    };
    console.log(object);
    postRef.push(object);
  };

  render() {
    const filteredOptions = this.state.options2.filter(
      o => o.link === this.state.selectedOption.value
    );

    return (
      <React.Fragment>
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
          <b>Select Functional Score ~ Capacity</b>
        </p>
        <Dropdown
          className="m-2"
          name="form-field-name"
          placeholder="Select Score"
          options={this.state.scores_c}
          onChange={this.handleChange3}
          value={this.state.selectedScore_c}
        />

        <p className="m-2">
          <b>Select Functional Score ~ Performance</b>
        </p>
        <Dropdown
          className="m-2"
          name="form-field-name"
          placeholder="Select Score"
          options={this.state.scores_p}
          onChange={this.handleChange4}
          value={this.state.selectedScore_p}
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

export default Capacity;
