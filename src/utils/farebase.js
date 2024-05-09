// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCkMp3pndXjS19UQoC7pHCchdeoS5p9ZM",
  authDomain: "netflixgpt-f16a8.firebaseapp.com",
  projectId: "netflixgpt-f16a8",
  storageBucket: "netflixgpt-f16a8.appspot.com",
  messagingSenderId: "736606153801",
  appId: "1:736606153801:web:7a1fdcacc0e4409302e398",
  measurementId: "G-7VBW1F43PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);