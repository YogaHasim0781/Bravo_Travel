import React, { useState } from 'react';
import '../Style/Signin.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError('');
    alert('Sign-in successful!');
    console.log(`Email: ${email}, Password: ${password}`);
    navigate('/booking');
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
        <p className="hint-text">Don't have an account? <a href="#signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Signin;
