// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "findhome-mern.firebaseapp.com",
  projectId: "findhome-mern",
  storageBucket: "findhome-mern.appspot.com",
  messagingSenderId: "90062242446",
  appId: "1:90062242446:web:d7b67aa8c48fdcb70a7fdf",
  measurementId: "G-1XCRS8Y7D8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
