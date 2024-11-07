import React, { useState } from 'react';
import axios from 'axios';
import '../Style/Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation for empty fields
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Send POST request to backend API
      await axios.post('http://localhost:5000/users', {
        name,
        email,
        password,
        confirmPassword,
      });

      alert('Sign-up successful!');
      setError('');
    } catch (err) {
      // Display error message from backend or default message
      setError(err.response?.data?.msg || 'Failed to sign up');
    }
  };

  return (
    <div className="signupab-container">
      <div className="form-background"></div>
      <div className="form-wrapper">
        <h2 className="form-title">Create Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <p className="hint-text">Already have an account? <a href="signin">Sign In</a></p>
      </div>
    </div>
  );
};

export default Signup;
