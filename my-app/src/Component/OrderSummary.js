import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/OrderSummary.css";

const OrderSummary = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tickets");
        setTickets(response.data);
      } catch (err) {
        setError("Failed to fetch ticket information.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      try {
        await axios.delete(`http://localhost:5000/api/tickets/${id}`);
        setTickets(tickets.filter(ticket => ticket.id !== id));
      } catch (err) {
        console.error(err);
        setError(err.response ? err.response.data.message : "Failed to delete ticket.");
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (tickets.length === 0) {
    return <p>No ticket information available.</p>;
  }

  return (
    <div className="orderSummary">
      <h2>Order Summary</h2>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="ticket-card">
          <div className="ticket-info">
            <span><strong>Nama:</strong></span>
            <span>{ticket.nama}</span>
          </div>
          <div className="ticket-info">
            <span><strong>NIK:</strong></span>
            <span>{ticket.nik}</span>
          </div>
          <div className="ticket-info">
            <span><strong>Gender:</strong></span>
            <span>{ticket.gender}</span>
          </div>
          <div className="ticket-info">
            <span><strong>Tanggal Pemesanan:</strong></span>
            <span>{new Date(ticket.tanggal_pemesanan).toLocaleDateString()}</span>
          </div>
          <div className="ticket-info">
            <span><strong>Keberangkatan:</strong></span>
            <span>{ticket.keberangkatan}</span>
          </div>
          <div className="ticket-info">
            <span><strong>Tiba:</strong></span>
            <span>{ticket.tiba}</span>
          </div>
          <button onClick={() => handleDelete(ticket.id)} className="delete-button">Batal Pesanan</button>
        </div>
      ))}
      <button onClick={() => navigate("/buyticket")}>Back to Buy Ticket</button>
    </div>
  );
};

export default OrderSummary;