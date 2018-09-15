import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";
import "bootstrap/dist/css/bootstrap.css";

var config = {
  apiKey: "AIzaSyB2GBtEiBHLktCPms0OsUcIuNtaORO_QI8",
  authDomain: "cwsquickforms.firebaseapp.com",
  databaseURL: "https://cwsquickforms.firebaseio.com",
  projectId: "cwsquickforms",
  storageBucket: "cwsquickforms.appspot.com",
  messagingSenderId: "939403593092"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
