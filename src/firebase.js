import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database };