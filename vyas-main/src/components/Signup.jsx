import React, { useState } from 'react';
import './signup.css';
import emails from '../assets/email.png';
import passwords from '../assets/password.png';
import person from '../assets/person.png';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      setError('Error creating account: ' + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='con'>
        <form onSubmit={handleSubmit}>
          <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
          </div>
          {error && <p className="error">{error}</p>}
          <div className='inputs'>
            <div className='input'>
              <img src={person} alt='Person Icon' />
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src={emails} alt='Email Icon' />
              <input
                type='email'
                placeholder='Email ID'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src={passwords} alt='Password Icon' />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <p className="terms">
            By continuing, you are indicating that you accept our 
            <a href="/terms"> Terms of Service</a> and 
            <a href="/policy"> Privacy Policy</a>.
          </p>
          <div className='submit-container'>
            <Link to='/login' className='login-btn'>Login</Link>
            <button type='submit' className='sub'>Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
