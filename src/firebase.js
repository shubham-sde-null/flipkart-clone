import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZgMb-ucl1unMBN09pXyYc1v8ZKP3rO9E",
  authDomain: "flipkart-clone-e5553.firebaseapp.com",
  projectId: "flipkart-clone-e5553",
  storageBucket: "flipkart-clone-e5553.appspot.com",
  messagingSenderId: "934105677229",
  appId: "1:934105677229:web:c8743b71a27d29efcb7524",
  measurementId: "G-HHC3XTY9ZY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
//it's very important to initalize the firebase app else we will not able to run our firebase features
// const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
