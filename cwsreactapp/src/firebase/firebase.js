import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyA9p5dXDRIbiRRS9W8-uuld6Q4U11c66Vs",
  authDomain: "tbi-demo.firebaseapp.com",
  databaseURL: "https://tbi-demo.firebaseio.com",
  projectId: "tbi-demo",
  storageBucket: "tbi-demo.appspot.com",
  messagingSenderId: "873220308790"
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
