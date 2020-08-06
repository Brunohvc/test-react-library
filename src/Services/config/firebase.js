import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1Y_JSLoQ-aPg_jCTR_AFD3AYfWic6o7A",
    authDomain: "test-react-library.firebaseapp.com",
    databaseURL: "https://test-react-library.firebaseio.com",
    projectId: "test-react-library",
    storageBucket: "test-react-library.appspot.com",
    messagingSenderId: "692904967775",
    appId: "1:692904967775:web:1a3560e12216ab358965ea",
    measurementId: "G-DCJ08TT0S7"
});
firebase.analytics();

const db = firebaseApp.firestore();

export default db;