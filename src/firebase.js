// src/firebase.js

import { initializeApp } from "firebase/app";
// ✅ Import the authentication services we will need
import { 
  getAuth, 
  GoogleAuthProvider, // For Google Sign-in
  RecaptchaVerifier,   // For Phone Sign-in
  signInWithPopup      // Function to trigger Google Popup
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG0hTfYFBvyApeR-w0hCHUinrq1G6UONc",
  authDomain: "go-x-b8ed2.firebaseapp.com",
  projectId: "go-x-b8ed2",
  storageBucket: "go-x-b8ed2.appspot.com", // Corrected storage bucket domain
  messagingSenderId: "1074522664305",
  appId: "1:1074522664305:web:919183cd637782a7845ad0",
  measurementId: "G-865T3H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase Authentication
export const auth = getAuth(app);

// Initialize and export the Google Auth provider
export const googleProvider = new GoogleAuthProvider();

// A helper function to easily trigger the Google sign-in popup
export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

// We will use this in the phone login component
export { RecaptchaVerifier };