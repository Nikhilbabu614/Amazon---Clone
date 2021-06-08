import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATtcNOzubaiqTdOMQfblDucSNjnoTPcYs",
  authDomain: "clone-94275.firebaseapp.com",
  projectId: "clone-94275",
  storageBucket: "clone-94275.appspot.com",
  messagingSenderId: "964550788054",
  appId: "1:964550788054:web:5eb3581f235e0dd8a35a77",
  measurementId: "G-S0Z8R8MZRS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};