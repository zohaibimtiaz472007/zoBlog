// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcLoTzEENvM1iZ1lyq5-ZCpa07wwQ13gE",
  authDomain: "blogtutorial-49fc9.firebaseapp.com",
  projectId: "blogtutorial-49fc9",
  storageBucket: "blogtutorial-49fc9.appspot.com",
  messagingSenderId: "15733895501",
  appId: "1:15733895501:web:27e4c88141d68b95edc704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}