import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      const path = location.pathname.toLowerCase();
      if (!user && path !== '/login' && path !== '/signup' && path !== '/main' && path !== '/terms' && path !== '/policy' && path !== '/' && path !== '/forgotpassword' && path !== '/documentation' && path !== '/pricing' && path !== '/contact' && !path.startsWith('/company') && !path.startsWith('/model')) {
        navigate('/main');
      }
    });

    return unsubscribe;
  }, [navigate, location]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Open Google's authentication popup
      await signInWithPopup(auth, provider);
      // No need to navigate here, let onAuthStateChanged handle it
    } catch (error) {
      alert(`Error signing in with Google: ${error.message}`);
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleEmailPasswordSignIn = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log('Logged in user:', user);
      // Handle post email/password sign-in logic if needed
    } catch (error) {
      alert(`Error signing in with email and password: ${error.message}`);
      console.error('Email/Password Sign-In Error:', error);
      throw error; // Propagate error for handling in the component
    }
  };

  const handleEmailSignup = async (email, password, name) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      await user.updateProfile({ displayName: name });
      console.log('Signed up user:', user);
    } catch (error) {
      alert(`Error signing up with email and password: ${error.message}`);
      console.error('Email/Password Signup Error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleGoogleSignIn, handleEmailPasswordSignIn, handleEmailSignup }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
