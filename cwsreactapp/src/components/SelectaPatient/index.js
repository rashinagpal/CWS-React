import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import * as firebase from "firebase";
import Dropdown from "react-dropdown";
import Buttons from "./buttons.jsx";
import * as routes from '../../constants/routes';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';



  class SelectaPatientPage extends Component {
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
      <div>
        <div>
          <Dropdown options={this.state.patient} />
        </div>
        <div>
		<li><Link to={routes.REPORT}>Report</Link></li>
		<li><Link to={routes.NEW_FUNCTIONAL_SCORE}>NewFunctionalScore</Link></li>
        </div>
      </div>
    );
  }
}
  
export default (SelectaPatientPage);
