import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import * as firebase from "firebase";
import Dropdown from "react-dropdown";

import { auth } from "../../firebase";
import Select from "react-select";

import { inject, observer } from "mobx-react";
import { compose } from "recompose";

import withAuthorization from "../Session/withAuthorization";

class NewFunctionalScorePage extends Component {
  constructor() {
    super();
    this.state = {
      patients: [],
      selectedOptionPatient: {},
      PatientName: ""
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

    rootRef.on("child_added", snapshot => {
      let element = {
        label: snapshot.val().label
      };
      this.setState(prevState => ({
        patients: [...prevState.patients, element]
      }));
    });
  }

  handleChanger1 = selectedOptionPatient => {
    this.setState({ selectedOptionPatient });
  };

  render() {
    return (
      <div>
        <div>
          <b>Select Patient</b>
          <Select
            className="m-2"
            options={this.state.patients}
            value={this.state.selectedOptionPatient.querySelector}
            onChange={this.handleChanger1}
            PatientName={this.state.selectedOptionPatient.label}
          />
        </div>
        <div>
          <p className="m-2" />
          <b>
            Select the Category of Report{" "}
            {this.state.selectedOptionPatient.label}
          </b>
          <li>
            <Link to={routes.IMPAIRMENT_OF_BODY_FUNCTIONS}>
              Impairment of Body Functions
            </Link>
          </li>
          <li>
            <Link to={routes.CAPACITY_AND_PERFORMANCE}>
              Capacity and Performance
            </Link>
          </li>
          <li>
            <Link to={routes.ENVIRONMENT}>Environment</Link>
          </li>
        </div>

        <div>
          <p className="m-2" />
          <b>Add new Functional score</b>{" "}
          <NavLink to="/impairment">
            <Button bsStyle="primary" className="m-3">
              {" "}
              Impairment of Body Functions
            </Button>
          </NavLink>
          <NavLink to="/env">
            <Button bsStyle="primary" className="m-3">
              {" "}
              Environment
            </Button>
          </NavLink>
          <NavLink to="/capacity">
            <Button bsStyle="primary" className="m-3">
              {" "}
              Capacity and Performance
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject("userStore"),
  observer
)(NewFunctionalScorePage);
