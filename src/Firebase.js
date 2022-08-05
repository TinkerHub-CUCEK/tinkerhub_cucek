// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const { getFirestore } = require("firebase/firestore")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBunbbItj4YQ0b9CPmnEUonmiRqcrWjLBU",
  authDomain: "tinkerhub-cucek.firebaseapp.com",
  projectId: "tinkerhub-cucek",
  storageBucket: "tinkerhub-cucek.appspot.com",
  messagingSenderId: "489713668915",
  appId: "1:489713668915:web:582001b5ffb05876a42446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export { app, db }