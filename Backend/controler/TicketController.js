import Ticket from "../models/TicketModels.js";

// Function to validate the incoming ticket data
const validateTicketData = (data) => {
    const { nama, nik, gender, tanggal_pemesanan, keberangkatan, tiba } = data;
    const errors = [];

    if (!nama) errors.push("Nama is required.");
    if (!nik) errors.push("NIK is required.");
    if (!gender) errors.push("Gender is required.");
    if (!tanggal_pemesanan) errors.push("Tanggal pemesanan is required.");
    if (!keberangkatan) errors.push("Keberangkatan is required.");
    if (!tiba) errors.push("Tiba is required.");

    return errors;
};

export const createTicket = async (req, res) => {
    const { nama, nik, gender, tanggal_pemesanan, keberangkatan, tiba } = req.body;

    // Validate the incoming data
    const validationErrors = validateTicketData(req.body);
    if (validationErrors.length > 0) {
        return res.status(400).json({ msg: "Validation errors", errors: validationErrors });
    }

    try {
        const newTicket = await Ticket.create({
            nama,
            nik,
            gender,
            tanggal_pemesanan,
            keberangkatan,
            tiba,
        });
        res.status(201).json({ msg: "Ticket purchased successfully!", ticket: newTicket });
    } catch (error) {
        console.error("Error creating ticket:", error);
        res.status(500).json({ msg: "Failed to purchase ticket", error: error.message });
    }
};


export const getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll(); // Fetch all tickets
        res.json(tickets);
    } catch (error) {
        console.error('Error fetching tickets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Existing function to get ticket by ID
export const getTicketById = async (req, res) => {
    const { id } = req.params;

    try {
        const ticket = await Ticket.findOne({ where: { id } });
        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.json(ticket);
    } catch (error) {
        console.error('Error fetching ticket:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// controllers/ticketController.js

export const deleteTicket = async (req, res) => {
    const { id } = req.params; // Mengambil ID dari parameter URL
    try {
        const deleted = await Ticket.destroy({ where: { id } }); // Menghapus tiket berdasarkan ID
        if (!deleted) {
            return res.status(404).json({ message: 'Ticket not found' }); // Menangani jika tiket tidak ditemukan
        }
        res.status(200).json({ message: 'Ticket deleted successfully' }); // Mengembalikan respons sukses
    } catch (error) {
        console.error("Error deleting ticket:", error); // Log kesalahan untuk debugging
        res.status(500).json({ message: 'Failed to delete ticket' }); // Menangani kesalahan
    }
};