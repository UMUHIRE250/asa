import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0RlY6qcs0vRnQw_yrmFyIhMj2JvFOWaw",
  authDomain: "toon-comics-library.firebaseapp.com",
  projectId: "toon-comics-library",
  storageBucket: "toon-comics-library.appspot.com",
  messagingSenderId: "790486750003",
  appId: "1:790486750003:web:ffe777476dafd7d9e72446"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }