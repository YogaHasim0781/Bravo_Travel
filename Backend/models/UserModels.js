import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const users = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
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
 
export default users;