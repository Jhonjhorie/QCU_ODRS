import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBOq4sLU4bb07wwSX4OftyndDKYo93GzHw",
  authDomain: "qcu-odrs.firebaseapp.com",
  projectId: "qcu-odrs",
  storageBucket: "qcu-odrs.appspot.com",
  messagingSenderId: "1021314388420",
  appId: "1:1021314388420:web:6715d2f4deb7524e1c5491"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);
