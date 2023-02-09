import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJwq9iN15E7bmW_1sKVszMvHK0L-OMCBk",
  authDomain: "chat-contex.firebaseapp.com",
  projectId: "chat-contex",
  storageBucket: "chat-contex.appspot.com",
  messagingSenderId: "81738398378",
  appId: "1:81738398378:web:172be261db79bed46eaed3",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
