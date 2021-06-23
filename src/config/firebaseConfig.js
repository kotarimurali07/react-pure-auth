/////////////////////
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDocAAF-MJ8bNTXbpDHY3r_fW8oPwLdxjw",
  authDomain: "slack-28304.firebaseapp.com",
  projectId: "slack-28304",
  storageBucket: "slack-28304.appspot.com",
  messagingSenderId: "583976248013",
  appId: "1:583976248013:web:940c8de43414f376137f84",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
