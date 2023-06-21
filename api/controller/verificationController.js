const userModel = require('../model/user');
const verificationModel = require('../model/userVerification');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const sendVerificationRequest = async (req, res) => {
   try {
    const {signUpToken} = req.cookies();
    const userDat = await jwt.verify(signUpToken,JWT_SECRET_KEY);
    let token = Math.floor(Math.random() * new Date()).toString().slice(0,4);
    await verificationModel.create({
        user: userDat.id,
        verificationToken:token
    });
    res.status(200).json('ok');
   } catch (error) {
    res.status(500).json({message: error.message});
   }

};
const verifyUser = async (req, res) => {
    const {token,id} = req.body;
    try {
       const user = await verificationModel.findOne({user: id});
        token !== user.verificationToken ? res.status(403).json({message:'invalid verification Token'}) :
        (new Date() - user.created_at) > 60*60 ? res.status(403).json({message:'Expired verification Token'}) :
        await userModel.findAndUpdate({user:id},{isVerified:true});
        res.status(201).json('ok')
    } catch (error) {
       res.status(500).json({message: error.message}); 
    }
}

module.exports = {
    verifyUser,sendVerificationRequest 
}