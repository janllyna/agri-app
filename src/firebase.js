// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3SaCebNx7e9CJ-v5o-5duGGCkNS1j9p0",
  authDomain: "contact-portal-8ab1d.firebaseapp.com",
  projectId: "contact-portal-8ab1d",
  storageBucket: "contact-portal-8ab1d.firebasestorage.app",
  messagingSenderId: "382370850818",
  appId: "1:382370850818:web:10724737da26a50494df1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
export{app,auth,db};