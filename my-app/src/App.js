import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import BuyTicket from './Component/buyticket';
import OrderSummary from './Component/OrderSummary';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Buyticket" element={<BuyTicket />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>

    </Router>
  );
};

export default App;
