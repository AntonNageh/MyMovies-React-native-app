// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv1Ifc5mME5HV7YvE72ccbmdKQ4-n-4c8",
  authDomain: "mymovies-5a208.firebaseapp.com",
  projectId: "mymovies-5a208",
  storageBucket: "mymovies-5a208.firebasestorage.app",
  messagingSenderId: "949011087583",
  appId: "1:949011087583:web:67bbbcbf278a86d400e96a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 