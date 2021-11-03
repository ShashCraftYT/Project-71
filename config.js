import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyC8ZB17ewD1bYmAbTCJUKSaUSR0XhS5_G4",
    authDomain: "project-story-hub-ba925.firebaseapp.com",
    projectId: "project-story-hub-ba925",
    storageBucket: "project-story-hub-ba925.appspot.com",
    messagingSenderId: "865159163049",
    appId: "1:865159163049:web:3f74da77692c5172a14db8"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()