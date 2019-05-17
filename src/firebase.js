import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCF2QOuH9QvIS44SOqEvgHd3SniHkWOy6I",
    authDomain: "react-slack-clone-94f69.firebaseapp.com",
    databaseURL: "https://react-slack-clone-94f69.firebaseio.com",
    projectId: "react-slack-clone-94f69",
    storageBucket: "react-slack-clone-94f69.appspot.com",
    messagingSenderId: "96644147474",
    appId: "1:96644147474:web:3ca8a2880f9eb1d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;