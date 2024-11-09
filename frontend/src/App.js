import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import SignIn from './Component/Signin';
import Booking from './Component/Booking';
import SignUp from './Component/Signup';





const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Routes>
    </Router>
  );
};

export default App;
