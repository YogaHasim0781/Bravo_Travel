import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../Style/Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      // Handle successful login
      alert('Sign-in successful!');
      console.log('Access Token:', response.data.accessToken);
      setError('');

      // Redirect to buyticket page
      navigate('/buyticket'); // Ensure /buyticket route is defined in your routes
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to sign in');
    }
  };

  return (
    <div className="signinab-container">
      <div className="form-background"></div>
      <div className="form-wrapper">
        <h2 className="form-title">Welcome Back</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="submit-btn">Sign In</button>
        </form>
        <p className="hint-text">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Signin;
