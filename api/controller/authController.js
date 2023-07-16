const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const sendMail = require('./sendEmail/verificationMail');
const verificationModel = require('../model/userVerification');
require('dotenv').config();
const jwt_secret = process.env.JWT_SECRET_KEY || "JUJU445TGY67UHJYXJYXJYXJYXJYXJ"
const BASE_URL = process.env.BASE_URL
const register = async (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(400).json({ message: errors.array() });
       return;
    }
    try {
        let hashedPassword = await bcrypt.hash(password, 10)
        let OTP = Math.floor(Math.random() * new Date()).toString().slice(0,4)
        const user = await User.create({ name: name, email: email, password: hashedPassword});
       await verificationModel.create({
            user:user._id,
            verificationToken: OTP
        })
        sendMail(email,`${BASE_URL}/verification/${OTP}`,OTP);
        const signUpToken = await jwt.sign({id:user._id},jwt_secret)
        res.status(201).cookie('signUpToken',signUpToken).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ message: errors.array() });
        return;
    }
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email});
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (passwordCheck) {
            const token = await jwt.sign({ email: user.email, id: user._id, name: user.name }, jwt_secret);
            res.status(201)
                .cookie("token", token, { maxAge: 1000 * (60 * 60 * 24), httpOnly: true })
                .json(user);
        } else {
             res.status(403).json({ message: "Incorrect credentials" });
        }
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
}
const logout = (req, res) => {
    res.cookie("token", "").json(true);
}

module.exports = {
    register: register,
    login: login,
    logout: logout,
}