import React, { useState } from 'react';
import '../Style/Style.css';

const Booking = () => {
  const [fromCountry, setFromCountry] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState('Economy');

  const countryOptions = {
    Indonesia: ['Jakarta', 'Surabaya', 'Medan', 'Bandung', 'Yogyakarta', 'Denpasar'],
    Singapore: ['Singapore'],
    Malaysia: ['Kuala Lumpur', 'Penang', 'Kota Kinabalu', 'Johor Bahru'],
    Thailand: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'],
    Vietnam: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
    China: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
    Japan: ['Tokyo', 'Osaka', 'Kyoto', 'Sapporo'],
    SouthKorea: ['Seoul', 'Busan', 'Incheon'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Miami'],
    UK: ['London', 'Manchester', 'Edinburgh'],
    France: ['Paris', 'Lyon', 'Marseille'],
    Germany: ['Berlin', 'Munich', 'Frankfurt'],
    UAE: ['Dubai', 'Abu Dhabi'],
    India: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'],
  };


  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Flight booked from ${fromCountry} - ${fromCity} to ${toCountry} - ${toCity} on ${date} for ${passengers} passenger(s) in ${flightClass} class.`);
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Book Your Flight</h2>
      <form onSubmit={handleBooking} className="booking-form">
        
        {/* From Country and City */}
        <div className="input-group">
          <label htmlFor="fromCountry">From Country:</label>
          <select
            id="fromCountry"
            value={fromCountry}
            onChange={(e) => {
              setFromCountry(e.target.value);
              setFromCity('');
            }}
            required
          >
            <option value="">Select Country</option>
            {Object.keys(countryOptions).map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="fromCity">From City:</label>
          <select
            id="fromCity"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            required
            disabled={!fromCountry}
          >
            <option value="">Select City</option>
            {fromCountry && countryOptions[fromCountry].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* To Country and City */}
        <div className="input-group">
          <label htmlFor="toCountry">To Country:</label>
          <select
            id="toCountry"
            value={toCountry}
            onChange={(e) => {
              setToCountry(e.target.value);
              setToCity('');
            }}
            required
          >
            <option value="">Select Country</option>
            {Object.keys(countryOptions).map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="toCity">To City:</label>
          <select
            id="toCity"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            required
            disabled={!toCountry}
          >
            <option value="">Select City</option>
            {toCountry && countryOptions[toCountry].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="class">Class:</label>
          <select
            id="class"
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
            required
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First Class</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
