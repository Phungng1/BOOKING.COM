// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmsYhckcLPv7gacSe4ZicWNfqZtSZtJSY",
  authDomain: "booking-b9761.firebaseapp.com",
  projectId: "booking-b9761",
  storageBucket: "booking-b9761.appspot.com",
  messagingSenderId: "423023330236",
  appId: "1:423023330236:web:8448674727069f0414a1b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth