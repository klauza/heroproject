import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCH0hBE-KMLzwvN9_B5oaqb1cMezHbxOlw",
    authDomain: "hero-project-klauza.firebaseapp.com",
    databaseURL: "https://hero-project-klauza.firebaseio.com",
    projectId: "hero-project-klauza",
    storageBucket: "",
    messagingSenderId: "254004353936"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
