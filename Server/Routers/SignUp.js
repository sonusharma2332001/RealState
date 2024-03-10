import bcryptjs from 'bcryptjs';
import express from "express";
import User from "../Models/UserModel.js";
const router = express.Router();



router.post('/signup', async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword})   //this is named argument
    try {
        await newUser.save();
        res.status(201).json({massage:"UserDate saved in DB Successfully"});
    } catch (error) {
        next(error)
    }
    
})

export default router;