const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_KEY  = process.env.JWT_SECRET_KEY;
const getProfile = async (req, res) => {
    const {token} = req.cookies;
    if(token) {
        try {
            const verify = await jwt.verify(token,JWT_SECRET_KEY);
            const {name, email, _id} = await User.findById(verify.id);
            res.json({name:name, email:email,id:_id});
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }else{
        res.status(422).json({message:"Invalid token"});
    }
}

module.exports = {
    getProfile: getProfile,
}