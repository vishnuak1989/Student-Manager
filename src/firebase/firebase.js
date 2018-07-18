import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyBkd9vwniYbUxjiw2AA4IvzBNcQmgY57UA",
    authDomain: "studentmanager-1eecd.firebaseapp.com",
    databaseURL: "https://studentmanager-1eecd.firebaseio.com",
    projectId: "studentmanager-1eecd",
    storageBucket: "studentmanager-1eecd.appspot.com",
    messagingSenderId: "848979814476"
  };

  firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export {firebase, googleAuthProvider, database as default};

