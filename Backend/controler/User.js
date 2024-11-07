import users from "../models/UserModels.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const getUsers = async (req, res) => { 
    try{
        const userData = await users.findAll({
            attributes: ['id' ,'name', 'email']
        });
        res.json(userData);
    } catch (error) {
        console.log(error)
    }
}

export const Register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Password and confirm password do not match" });
    }

    // Check if the email is already registered
    const existingUser = await users.findOne({ where: { email: email } });
    if (existingUser) {
        return res.status(400).json({ msg: "Email is already registered" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    
    try {
        await users.create({
            name: name,
            email: email,
            password: hashPassword,
        });
        res.status(201).json({ msg: "Registration successful" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}


export const Login = async (req, res) => { 
    try { 
        const user = await users.findOne({ 
            where: {
                email: req.body.email
            }
        });

        if (!user) {
            return res.status(404).json({ msg: 'Email tidak ditemukan' });
        }

        // Log input password dan password yang di-hash dari database
        console.log("Input Password:", req.body.password);
        console.log("Stored Hashed Password:", user.password);

        const match = await bcrypt.compare(req.body.password.trim(), user.password);
        
        if (!match) {
            console.log("Password does not match."); // Log jika password tidak cocok
            return res.status(400).json({ msg: 'Wrong password' });
        }

        const userId = user.id;
        const name = user.name;
        const email = user.email;
        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await users.update({ refresh_token: refreshToken }, {
            where: { 
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, { 
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });
        res.json({ accessToken });
    } catch (error) {
        console.error("Login error:", error); // Log error jika terjadi
        res.status(500).json({ msg: 'Server error' });
    }
}

export const Logout = async(req,res) => { 
    const refreshToken = req.cookies.refreshToken; 
    if(!refreshToken) return res.sendStatus(204);
    const user = await users.findAll({
        where:{ 
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId  = user[0].id;
    await users.update({refresh_token: null},{ 
        where: { 
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200)
}

