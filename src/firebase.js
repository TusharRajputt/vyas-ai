// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArri2x_YmhsRYC85fDU1pNWYxuw3JjJmo",
  authDomain: "vyas-ai-8e2d4.firebaseapp.com",
  databaseURL: "https://vyas-ai-8e2d4-default-rtdb.firebaseio.com",
  projectId: "vyas-ai-8e2d4",
  storageBucket: "vyas-ai-8e2d4.firebasestorage.app",
  messagingSenderId: "528127924335",
  appId: "1:528127924335:web:a9b3e96ea1434fa627d59a",
  measurementId: "G-GFW5LBKHMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);