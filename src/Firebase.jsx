import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA13vIOJvu42ZQiMi94LVah2PweX7mEUcc',
  authDomain: 'react-feedback-form-2b10e.firebaseapp.com',
  databaseURL: 'https://react-feedback-form-2b10e-default-rtdb.firebaseio.com',
  projectId: 'react-feedback-form-2b10e',
  storageBucket: 'react-feedback-form-2b10e.appspot.com',
  messagingSenderId: '754484328176',
  appId: '1:754484328176:web:a4af6e8bda68b03b06b435',
  measurementId: 'G-B4HML5CPV3',
  
});

var db = firebaseApp.firestore();


const firebaseConfig = {
  apiKey: 'AIzaSyA13vIOJvu42ZQiMi94LVah2PweX7mEUcc',
  authDomain: 'react-feedback-form-2b10e.firebaseapp.com',
  databaseURL: 'https://react-feedback-form-2b10e-default-rtdb.firebaseio.com',
  projectId: 'react-feedback-form-2b10e',
  storageBucket: 'react-feedback-form-2b10e.appspot.com',
  messagingSenderId: '754484328176',
  appId: '1:754484328176:web:a4af6e8bda68b03b06b435',
  measurementId: 'G-B4HML5CPV3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log.apply(error);
    })
}



export { db, auth, signInWithGoogle };
