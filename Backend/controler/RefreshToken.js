import users from "../models/UserModels.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req,res) => { 
    try{ 
        const refreshtoToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await users.findAll({ 
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) return res.senStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => { 
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const acccesToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ acccesToken })
        }); 
    } catch (error){
        console.log(error)
    }
}