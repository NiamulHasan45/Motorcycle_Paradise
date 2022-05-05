// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpanXHhAbNun1ncGISai3yRWUkTGPpj0k",
  authDomain: "motorcycle-inventory-764ea.firebaseapp.com",
  projectId: "motorcycle-inventory-764ea",
  storageBucket: "motorcycle-inventory-764ea.appspot.com",
  messagingSenderId: "341094474311",
  appId: "1:341094474311:web:7e06633ffb28a23684c762"


  // apiKey:`${process.env.API_KEY}`,
  // authDomain: `${process.env.AUTH_DOMAIN}`,
  // projectId: `${process.env.PROJECT_ID}`,
  // storageBucket: `${process.env.STORAGE_BUCKET}`,
  // messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
  // appId: `${process.env.APP_ID}`

  // apiKey:process.env.API_KEY,
  // authDomain:process.env.AUTH_DOMAIN,
  // projectId:process.env.PROJECT_ID,
  // storageBucket:process.env.STORAGE_BUCKET,
  // messagingSenderId:process.env.MESSAGING_SENDER_ID,
  // appId:process.env.APP_ID,

  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
