// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNkI3Yw1pbTZuwefHHYOqYDVrYR0Gx7Nw",
  authDomain: "clone-48fe8.firebaseapp.com",
  projectId: "clone-48fe8",
  storageBucket: "clone-48fe8.appspot.com",
  messagingSenderId: "215913816263",
  appId: "1:215913816263:web:9b7643742a441359e05ee2",
  measurementId: "G-EXYMY7C98K",
};

const firebaseApp = initializeApp(firebaseConfig);

//initialize the database
const db = getFirestore(firebaseApp);
//initialize the authentication
const auth = getAuth(firebaseApp);

export {db, auth};