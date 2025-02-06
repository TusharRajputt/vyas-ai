import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './loginsignup.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;

    try {
      await sendPasswordResetEmail(auth, emailVal);
      alert('Check your email for password reset instructions');
      navigate('/Login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='con'>
        <div className='header'>
          <div className='text'>Forgot Password</div>
          <div className='underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input name="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="submit-container">
            <button type="submit" className='sub'>Reset Password</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;