import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Buttons from "./buttons.jsx";

class Patient extends Component {
  constructor() {
    super();
    this.state = {
      patient: ""
    };
  }

  componentWillMount() {
    this.getData(66);
  }

  //firebase fetch
  getData(index) {
    var rootRef = firebase
      .database()
      .ref()
      .child("patient");
    var patients = [];
    rootRef.on("child_added", snapshot => {
      // Store all the labels in array
      patients.push(snapshot.val().label);
    });
    // Store label array into state
    this.setState({
      patient: patients
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Dropdown options={this.state.patient} />
        </div>
        <div>
          <Buttons />
        </div>
      </React.Fragment>
    );
  }
}
export default Patient;
