import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Environment from "./environment.jsx";
import Capacity from "./capacity.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = "";
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/impairement" component={Impairement} exact />
              <Route path="/environment" component={Environment} exact />
              <Route path="/capacity" component={Capacity} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
