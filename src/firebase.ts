import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCU_GRqWk0anLxlDNmUveQjHTV-rOk9ntk",
  authDomain: "feedback-ux.firebaseapp.com",
  databaseURL: "https://feedback-ux.firebaseio.com",
  projectId: "feedback-ux",
  storageBucket: "feedback-ux.appspot.com",
  messagingSenderId: "954433460591",
  appId: "1:954433460591:web:3e2e3a6310f34f9ce3b09a"
});

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// Collections
const usersCollection = db.collection("users");

const { Timestamp, GeoPoint } = firebase.firestore;

export {
    app,
    db,
    auth,
    currentUser,
    usersCollection,
    Timestamp,
    GeoPoint,
};
