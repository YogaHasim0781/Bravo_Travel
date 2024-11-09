import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Ticket = db.define("ticketings", {
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nik: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false,
    },
    tanggal_pemesanan: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    keberangkatan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tiba: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

 
// Ensure the table is created only if it doesn't exist
(async () => {
    try {
        await users.sync({ alter: true });
        console.log("Users table is synchronized and updated.");
    } catch (error) {
        console.error("Error synchronizing the Users table:", error);
    }
})();


export default Ticket;