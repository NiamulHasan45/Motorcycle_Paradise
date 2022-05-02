// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyU1TZwfNR5IoyZB8XqnGs9QhhYeXNqr4",
  authDomain: "fitbuzz-gym.firebaseapp.com",
  projectId: "fitbuzz-gym",
  storageBucket: "fitbuzz-gym.appspot.com",
  messagingSenderId: "654024527641",
  appId: "1:654024527641:web:ef94f2430976690102ff88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
