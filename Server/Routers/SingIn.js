import express from 'express';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../Models/UserModel.js';
import { errorHandler } from '../UtilFunctions/error.js';

const router = express.Router();

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validuser = await User.findOne({ email: email })
        if (!validuser) {
            return next(errorHandler(404, 'User not found'))
        }
        const validpassword = bcryptjs.compareSync(password, validuser.password)
        if (!validpassword) return next(errorHandler(401, "Incorrect password"))
        const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRETKEY);
        const { password: pass, ...rest} =validuser._doc;
        res.cookie('access_token', token,
            { httpOnly: true, expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) })
            .status(200).json(rest)
    } catch (error) {
        next(error)
    }
})

export default router;

