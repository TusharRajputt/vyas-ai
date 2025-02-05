import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginsignup.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '../AuthContext';
import { FaEnvelope } from 'react-icons/fa';

const MainPage = () => {
  const { handleGoogleSignIn } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleButtonClick = async () => {
    try {
      setLoading(true);
      setError('');
      console.log('Attempting Google sign-in...');
      await handleGoogleSignIn();
      console.log('Google sign-in successful.'); // Check if this message appears
      navigate('/profile'); // Redirect after successful Google sign-in
    } catch (error) {
      setError('Google Sign-In Error');
      console.error('Google Sign-In Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailButtonClick = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  return (
    <div>
      <Navbar />
      <div className='con'>
        <div className='header'>
          <div className='text'>Welcome</div>
          <p>Sign In or Sign Up</p>
          <div className='underline'></div>
        </div>
        <div className="auth-options">
          <button
            type="button"
            onClick={handleGoogleButtonClick}
            className={`auth-button google ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading && <span className="spinner"></span>}
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google Icon"
              className="google-icon"
            />
            Continue with Google
          </button>
          <button
            type="button"
            onClick={handleEmailButtonClick}
            className="auth-button email"
          >
            <FaEnvelope className="email-icon" />
            Continue with Email
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
