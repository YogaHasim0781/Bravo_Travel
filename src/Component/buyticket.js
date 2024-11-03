import React, { useState } from "react";
import "../Style/BuyTicket.css";

const BuyTicket = () => {
  // State to store ticket history and new ticket information
  const [ticketHistory, setTicketHistory] = useState([]);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);

  // Function to handle ticket purchase
  const handlePurchase = () => {
    if (destination && date) {
      const newTicket = {
        id: ticketHistory.length + 1,
        destination,
        date,
        passengerCount,
      };
      setTicketHistory([...ticketHistory, newTicket]);
      setDestination("");
      setDate("");
      setPassengerCount(1);
    } else {
      alert("Please select destination and date.");
    }
  };

  return (
    <div className="buyTicketPage">
      <h2>Buy Ticket</h2>

      {/* Ticket Purchase Form */}
      <div className="ticketForm">
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination"
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Number of Passengers:
          <input
            type="number"
            min="1"
            value={passengerCount}
            onChange={(e) => setPassengerCount(e.target.value)}
          />
        </label>

        <button onClick={handlePurchase} className="purchaseButton">
          Buy Ticket
        </button>
      </div>

      {/* Ticket Purchase History */}
      <div className="ticketHistory">
        <h3>Ticket Purchase History</h3>
        {ticketHistory.length > 0 ? (
          <ul>
            {ticketHistory.map((ticket) => (
              <li key={ticket.id} className="ticketItem">
                <strong>Destination:</strong> {ticket.destination} | 
                <strong> Date:</strong> {ticket.date} | 
                <strong> Passengers:</strong> {ticket.passengerCount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tickets purchased yet.</p>
        )}
      </div>

      {/* Additional Section: Offers or Info */}
      <div className="ticketInfo">
        <h3>Additional Information</h3>
        <p>Explore exclusive travel deals and discounts on our platform!</p>
        <ul>
          <li>Special discounts for group bookings</li>
          <li>Travel insurance included in ticket price</li>
          <li>24/7 customer support for travelers</li>
        </ul>
      </div>
    </div>
  );
};

export default BuyTicket;
