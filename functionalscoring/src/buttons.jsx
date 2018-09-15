import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import "bootstrap/dist/css/bootstrap.css";
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
          Impairement of Body Functions
        </Button>
        <Button bsStyle="primary" className="m-3">
          {" "}
          Capacity and Performance
        </Button>
        <Button bsStyle="primary"> Environment </Button>
      </div>
    );
  }
}

export default buttons;
