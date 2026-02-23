// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPkuOorStxj2hQ7Scm6lxfoGrHRdoTO5o",
  authDomain: "todo-command-v2.firebaseapp.com",
  projectId: "todo-command-v2",
  storageBucket: "todo-command-v2.firebasestorage.app",
  messagingSenderId: "1064212318285",
  appId: "1:1064212318285:web:dcce3bc8c60e056ae63404",
  measurementId: "G-NC41Q7PFYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
