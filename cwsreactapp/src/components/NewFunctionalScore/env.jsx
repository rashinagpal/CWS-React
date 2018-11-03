import ReactDOM from "react-dom";
import React, { Component } from "react";
import * as firebase from "firebase";
import Select from "react-select";
import Dropdown from "react-dropdown";
import { FormControl } from "react-bootstrap";
import Navigation1 from "./Navigation1";
import "../.././styles.css";
class Environment extends Component {
  constructor() {
    super();
    this.state = {
      name: "ScoreBoard-Environment",
      selectedOption: {},
      selectedOption2: {},
      options1: [],
      options2: [],
      scores: [],
      selectedScore: {},
      c: "",
      patientVal: "23 - Austin Chamney - 000001 - 02 Jan 1991"
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

  handleSubmit = e => {
    console.log("submitted");
    var postRef = firebase
      .database()
      .ref()
      .child(this.state.patientVal)
      .child(this.state.name);
    const object = {
      careProvider: "testProvider",
      Moderatebarrier: this.state.selectedScore.value,
      domain: this.state.selectedOption.label,
      subDomain: this.state.selectedOption2.label,
      comment: this.state.c,
      assessmentDate: Date()
    };
    console.log(object);
    postRef.push(object);
  };

  render() {
    const filteredOptions = this.state.options2.filter(
      o => o.link === this.state.selectedOption.value
    );

    return (
      <div>
        <Navigation1 />
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

export default Environment;
