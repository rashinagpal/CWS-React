import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as firebase from "firebase";
import Dropdown from "react-dropdown";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

class Navigation1 extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <p className="m-2" />
          <b>Select the Category of Report </b>
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
          <b>Add new functional score</b>
          <span>
            {" "}
            <NavLink to="/impairment">
              <Button bsStyle="primary" className="m-3">
                {" "}
                Impairment of Body Functions
              </Button>
            </NavLink>
            <NavLink to="/capacity">
              <Button bsStyle="primary" className="m-3">
                {" "}
                Capacity and Performance
              </Button>
            </NavLink>
			<NavLink to="/env">
              <Button bsStyle="primary" className="m-3">
                {" "}
                Environment
              </Button>
            </NavLink>
          </span>
        </div>
      </div>
    );
  }
}

export default Navigation1;
