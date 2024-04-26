// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { 
  getAuth,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app)
export const auth = getAuth(app)