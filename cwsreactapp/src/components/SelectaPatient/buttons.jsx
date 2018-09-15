import React, { Component } from "react";
import * as firebase from "firebase";
import { Button } from "react-bootstrap";

class buttons extends Component {
  constructor() {
    super();
    this.state = {
      but: ""
    };
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" className="m-3">
          {" "}
          Report
        </Button>
        <Button bsStyle="primary" className="m-3">
          {" "}
          New Functional Score
		  </Button>
      </div>
    );
  }
}

export default buttons;
