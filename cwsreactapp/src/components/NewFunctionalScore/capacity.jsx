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

class Capacity extends Component {
  constructor() {
    super();
    this.state = {
      name: "Capacity and Performance",
      selectedOption: {},
      selectedOption2: {},
      options1: [],
      options2: [],
      scores_c: [],
      scores_p: [],
      selectedScore_c: {},
      selectedScore_p: {},
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
    var rootRef = ref.child("capacity_and_performance").child("domain");
    var rootRef2 = ref.child("capacity_and_performance").child("subDomain");
    var rootRef3 = ref.child("Functional_Scores").child("capacity");
    var rootRef4 = ref.child("Functional_Scores").child("performance");
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

  handleDateChange = date => {
    console.log(date);
    this.setState({ date });
  };

  handleSubmit = e => {
    console.log("submitted");
    var postRef = firebase
      .database()
      .ref()
      .child("patient")
      .child(this.state.patientVal)
      .child("reports")
      .child(this.state.name);
    const object = {
      careProvider: "testProvider",
      ModerateImpairmentC: this.state.selectedScore_c.value,
      ModerateImpairmentP: this.state.selectedScore_p.value,
      domain: this.state.selectedOption.label,
      subDomain: this.state.selectedOption2.label,
      capacitycomment: this.state.c,
      assessmentDate: this.state.date.format("DD-MMM-YY")
    };
    console.log(object);
    alert("submitted");
    postRef.push(object);
  };

  render() {
    const filteredOptions = this.state.options2.filter(
      o => o.link === this.state.selectedOption.value
    );

    return (
      <div>
        <Navigation1 />
        <Header name="Capacity and Performance" />

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
        <Select
          className="m-2"
          name="form-field-name"
          options={this.state.scores_c}
          onChange={this.handleChange3}
          value={this.state.selectedScore_c}
        />

        <p className="m-2">
          <b>Select Functional Score ~ Performance</b>
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

export default Capacity;
