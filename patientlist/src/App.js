import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import "react-dropdown/style.css";
import Patient from "./patient.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = "";
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Patient />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
