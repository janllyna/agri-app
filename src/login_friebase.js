// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigLogin = {
  apiKey: "AIzaSyCgiw_fHEmH9SAAykZmwkzpiySqEK7INhQ",
  authDomain: "test100-bc768.firebaseapp.com",
  projectId: "test100-bc768",
  storageBucket: "test100-bc768.firebasestorage.app",
  messagingSenderId: "1074479653644",
  appId: "1:1074479653644:web:eb3b5bd169c9847e789f29"
};

// Initialize Firebase
const loginapp =
  getApps().find(app => app.name === "LOGIN_APP") ||
  initializeApp(firebaseConfigLogin, "LOGIN_APP");

const loginauth = getAuth(loginapp);
const logindb = getFirestore(loginapp);

export { loginapp, loginauth, logindb };