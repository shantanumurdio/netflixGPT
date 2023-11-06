// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAylIP3kT2F3X7_bF7OgPCvm8yvM-lVsRU",
  authDomain: "netflixgpt-2d405.firebaseapp.com",
  projectId: "netflixgpt-2d405",
  storageBucket: "netflixgpt-2d405.appspot.com",
  messagingSenderId: "245856723559",
  appId: "1:245856723559:web:bba2dc42686bc156d16ac2",
  measurementId: "G-YQ3FR5N7GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);