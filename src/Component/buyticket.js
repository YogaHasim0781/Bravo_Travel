import React, { useState } from "react";
import axios from "axios";
import "../Style/BuyTicket.css";

const BuyTicket = () => {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [gender, setGender] = useState("male");
  const [tanggalPemesanan, setTanggalPemesanan] = useState("");
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tiba, setTiba] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handlePurchase = async () => {
    if (!nama || !nik || !tanggalPemesanan || !keberangkatan || !tiba) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const newTicket = {
        nama,
        nik,
        gender,
        tanggal_pemesanan: tanggalPemesanan,
        keberangkatan,
        tiba,
      };
      const response = await axios.post("http://localhost:5000/api/tickets", newTicket);
      console.log(response.data); // Log response from server
      setSuccessMessage("Ticket purchased successfully!");
      // Reset form fields
      setNama("");
      setNik("");
      setTanggalPemesanan("");
      setKeberangkatan("");
      setTiba("");
      setError("");
    } catch (err) {
      console.error(err); // Log error for debugging
      setError("Failed to purchase ticket. Please try again.");
    }
  };

  return (
    <div className="buyTicketPage">
      <h2>Buy Ticket</h2>
      <div className="ticketForm">
        <label>
          Nama:
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <label>
          NIK:
          <input
            type="text"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            placeholder="Enter your NIK"
          />
        </label>

        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Tanggal Pemesanan:
          <input
            type="date"
            value={tanggalPemesanan}
            onChange={(e) => setTanggalPemesanan(e.target.value)}
          />
        </label>

        <label>
          Keberangkatan:
          <input
            type="text"
            value={keberangkatan}
            onChange={(e) => setKeberangkatan(e.target.value)}
            placeholder="Enter departure location"
          />
        </label>
        <label>
          Tiba:
          <input
            type="text"
            value={tiba}
            onChange={(e) => setTiba(e.target.value)}
            placeholder="Enter arrival location"
          />
        </label>
        <button onClick={handlePurchase} className="purchaseButton">
          Buy Ticket
        </button>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default BuyTicket;
