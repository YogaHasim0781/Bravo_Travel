import express from "express";
import { getUsers, Register, Login, Logout } from "../controler/User.js"
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controler/RefreshToken.js";
import { createTicket, getTicketById, getAllTickets, deleteTicket } from "../controler/TicketController.js"; // Import controller tiket

const router = express.Router();

router.get('/users', verifyToken,getUsers)
router.post('/users',Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)


// Tambahkan route untuk tiket
router.post('/api/tickets', createTicket);
router.get('/api/tickets/:id', getTicketById);
router.get('/api/tickets', getAllTickets);
router.delete('/api/tickets/:id', deleteTicket);

export default router;