import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
dotenv.config()

import TestRoute from './Routers/Test.js'
import signUpRoute from './Routers/SignUp.js';
import LoginRouter from './Routers/SingIn.js'

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongo Connected");
}).catch((err)=>{
    console.log(err);
})


const app = express();
app.use(express.json());


app.listen(3000,()=>{
    console.log('Server is running at port 3000')
})

app.use("/api",TestRoute);
app.use("/api",signUpRoute);
app.use("/api",LoginRouter);

// error handle middleware
app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})