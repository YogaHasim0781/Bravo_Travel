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

export default Ticket;