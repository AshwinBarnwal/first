// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4_M50x2pNOdtqixw32kNbUmmRBKox4FA",
  authDomain: "nth-glass-292010.firebaseapp.com",
  projectId: "nth-glass-292010",
  storageBucket: "nth-glass-292010.appspot.com",
  messagingSenderId: "1060643336484",
  appId: "1:1060643336484:web:c0578bf1a75a85d32743b1",
  measurementId: "G-6GHKR2KF61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);