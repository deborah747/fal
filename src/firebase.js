// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2GmXPw6gZ0odpn7G7ashDTQrojyuMUfQ",
  authDomain: "booking-83228.firebaseapp.com",
  projectId: "booking-83228",
  storageBucket: "booking-83228.firebasestorage.app",
  messagingSenderId: "443936127054",
  appId: "1:443936127054:web:db94913856f0734316ab1f",
  measurementId: "G-J5H1TB9M8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);