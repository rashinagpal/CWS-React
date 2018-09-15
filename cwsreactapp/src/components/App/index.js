import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import withAuthentication from "../Session/withAuthentication";
import * as routes from "../../constants/routes";
import SelectaPatientPage from "../SelectaPatient";
import ReportPage from "../Report";
import NewFunctionalScorePage from "../NewFunctionalScore";
import ImpairmentofBodyFunctionsPage from "../ImpairmentofBodyFunctions";
import CapacityandPerformancePage from "../CapacityandPerformance";
import EnvironmentPage from "../Environment";
import Navigation1 from "../NewFunctionalScore/Navigation1";
import Impairment from "../NewFunctionalScore/impairment.jsx";
import Environment from "../NewFunctionalScore/env.jsx";
import Capacity from "../NewFunctionalScore/capacity.jsx";

import "./index.css";

const App = () => (
  <Router>
    <div className="app">
      <Navigation />

      <hr />

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route
        exact
        path={routes.SelectaPatient}
        component={() => <SelectaPatientPage />}
      />
      <Route exact path={routes.REPORT} component={() => <ReportPage />} />
      <Route
        exact
        path={routes.NEW_FUNCTIONAL_SCORE}
        component={() => <NewFunctionalScorePage />}
      />
      <Route
        exact
        path={routes.IMPAIRMENT_OF_BODY_FUNCTIONS}
        component={() => <ImpairmentofBodyFunctionsPage />}
      />
      <Route
        exact
        path={routes.CAPACITY_AND_PERFORMANCE}
        component={() => <CapacityandPerformancePage />}
      />
      <Route
        exact
        path={routes.ENVIRONMENT}
        component={() => <EnvironmentPage />}
      />
      <Route path="/impairment" component={Impairment} exact />
      <Route path="/env" component={Environment} exact />
      <Route path="/capacity" component={Capacity} exact />

      <hr />
    </div>
  </Router>
);

export default withAuthentication(App);
