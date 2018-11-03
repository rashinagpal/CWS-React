import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyB2GBtEiBHLktCPms0OsUcIuNtaORO_QI8",
  authDomain: "cwsquickforms.firebaseapp.com",
  databaseURL: "https://cwsquickforms.firebaseio.com",
  projectId: "cwsquickforms",
  storageBucket: "cwsquickforms.appspot.com",
  messagingSenderId: "939403593092"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
