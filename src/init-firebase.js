// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";


// NOTE: I think you might have to update the following config object if you add or remove any Firebase services. However, you can see that many services are included by default (e.g. authDomain, databaseURL, storageBucket), so you won't need to update this config object for everything.
// Your web app's Firebase configuration.
// Follow the instructions here to get your Firebase config:
// https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBLDYEl6wkQhOezR8X3n214EmJZpR3XULI",
  authDomain: "instagraph-1d5f3.firebaseapp.com",
  databaseURL: "https://instagraph-1d5f3.firebaseio.com",
  projectId: "instagraph-1d5f3",
  storageBucket: "instagraph-1d5f3.appspot.com",
  messagingSenderId: "4385914984",
  appId: "1:4385914984:web:2576ca24ec6d56d5e47bdd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase utils
const auth = firebase.auth();

export {
  auth,
}
