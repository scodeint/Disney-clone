//import { initializeApp } from 'firebase/app';
//import {getAuth} from 'firebase/auth';
//import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBHj3dsFGi1WoO3ZVpf8KpjyXQtdz9eh4s",
  authDomain: "disneyplus-clone-7f3e2.firebaseapp.com",
  projectId: "disneyplus-clone-7f3e2",
  storageBucket: "disneyplus-clone-7f3e2.appspot.com",
  messagingSenderId: "41669402622",
  appId: "1:41669402622:web:f7855961f3c802256aeaaf",
  measurementId: "G-FGC7QDT94F"
};

//initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth, provider, storage};
export default db;
