import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCTJ5VT8wN16pg9ja2lMaAiDyMgP0ZGGjM",
  authDomain: "vyas-auth.firebaseapp.com",
  projectId: "vyas-auth",
  storageBucket: "vyas-auth.appspot.com",
  messagingSenderId: "815458381003",
  appId: "1:815458381003:web:fb1efccaf7f4eee3743f4e",
  databaseURL: "https://vyas-ai-8e2d4-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database };