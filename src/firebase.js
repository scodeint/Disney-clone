import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, provider} from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBHj3dsFGi1WoO3ZVpf8KpjyXQtdz9eh4s",
  authDomain: "disneyplus-clone-7f3e2.firebaseapp.com",
  projectId: "disneyplus-clone-7f3e2",
  storageBucket: "disneyplus-clone-7f3e2.appspot.com",
  messagingSenderId: "41669402622",
  appId: "1:41669402622:web:f7855961f3c802256aeaaf",
  measurementId: "G-FGC7QDT94F"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const provider = new firebaseApp.getAuth.Google.authProvider
const storage = firebaseApp.storage();

export{getAuth, provider, storage}
export default db;