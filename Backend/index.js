import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Database connected');
        
        // Sinkronisasi model dengan database
        await db.sync(); // Menyinkronkan semua model
        console.log("Database & tables created!");
    } catch (error) { 
        console.error("Database connection error:", error);
        process.exit(1); // Exit the process if the database connection fails
    }

    app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
    app.use(cookieParser());
    app.use(express.json());
    app.use(router);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
};

startServer();