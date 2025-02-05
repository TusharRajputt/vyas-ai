import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginsignup.css';
import em from '../assets/email.png';
import pass from '../assets/password.png';
import Navbar from './Navbar';
import Footer from './Footer';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Profile');
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='con'>
        <div className='header'>
          <div className='text'>Login</div>
          <div className='underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <img src={em} alt="Email" />
            <input
              type="email"
              placeholder='Email ID'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <img src={pass} alt="Password" />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forget-password-container">
            <span style={{ color: '#666' }}>Lost Password? </span>
            <span onClick={() => navigate('/ForgotPassword')} style={{ color: 'green', cursor: 'pointer' }}>Click Here!</span>
          </div>
          <div className="submit-container">
            <button type="button" onClick={() => navigate('/main')} className='gray main-page-btn'>Main Page</button>
            <button type="submit" className='sub'>Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;