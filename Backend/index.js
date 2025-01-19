import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session"; // Don't forget to import express-session

dotenv.config();
const app = express();

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Database connected');
    } catch (error) {
        console.error(error);
    }

    app.use(session({
        secret: process.env.SESS_SECRET,
        resave: false,
        saveUninitialized: true,
        store: store,
        cookie: {
            httpOnly: true,
            sameSite: 'lax',
            secure: 'false',
        }
    }));

    app.use(cors({
        credentials: true,
        origin: true,
    }));

    app.use(cookieParser());
    app.use(express.json());
    app.use(router);

    app.listen(5000, () => console.log('Server is running at port 5000'));
};

startServer();
