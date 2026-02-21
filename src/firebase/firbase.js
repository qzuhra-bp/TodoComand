// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMkGuZpA1A54FiQ002Brqd1PLf6iB0zng",
  authDomain: "todocomand.firebaseapp.com",
  projectId: "todocomand",
  storageBucket: "todocomand.firebasestorage.app",
  messagingSenderId: "293793312177",
  appId: "1:293793312177:web:48bb3956e5d2a17c18a190",
  measurementId: "G-C4R7P24VLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)