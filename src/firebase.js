import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0PNLz7SqZ5STGrGVvvH-hithqL6Ai0iE",
  authDomain: "stockapp-6e0a4.firebaseapp.com",
  projectId: "stockapp-6e0a4",
  storageBucket: "stockapp-6e0a4.appspot.com",
  messagingSenderId: "428804015091",
  appId: "1:428804015091:web:792f17e77707e0d13d4886",
  measurementId: "G-HLW6R6CTKY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
