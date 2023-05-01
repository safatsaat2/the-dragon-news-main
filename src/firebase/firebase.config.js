// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA82BLWiLVoBMK9iWQ9UPXJZv2A9Tom8QE",
  authDomain: "the-dragon-news-main.firebaseapp.com",
  projectId: "the-dragon-news-main",
  storageBucket: "the-dragon-news-main.appspot.com",
  messagingSenderId: "1022075029255",
  appId: "1:1022075029255:web:891fae81bb70f577cd67a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;