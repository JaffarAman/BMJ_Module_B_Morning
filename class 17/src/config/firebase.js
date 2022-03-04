import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgMF75RQsGe02ulG-IYTWqQmiLvxAZFU0",
  authDomain: "react-with-firebase-2c415.firebaseapp.com",
  projectId: "react-with-firebase-2c415",
  storageBucket: "react-with-firebase-2c415.appspot.com",
  messagingSenderId: "1050591689713",
  appId: "1:1050591689713:web:19de7970bdcf9393802250",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
