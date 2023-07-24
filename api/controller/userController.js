const { set } = require('mongoose');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
// const userAuthenticator = require('../utils/JwtAuthenticator');
require('dotenv').config();
const JWT_SECRET_KEY  = process.env.JWT_SECRET_KEY;
const getProfile = async (req, res) => {
    const {token} = req.cookies;
    if(token) {
        try {
            const verify = await jwt.verify(token,JWT_SECRET_KEY);
            const user = await User.findById(verify.id);
            res.json(user);
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }else{
        res.status(422).json({message:"Invalid token"});
    }
}

const uploadUserProfileImage = (req, res) => {
    const uploadedFiles = [];
    dir =`${__dirname}/profile/images/`;
    for (let i = 0; i < req.files.length; i++) {
        const {path,originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newName = "photo-"+ Date.now() +"." + ext;
        fs.renameSync(path, `${dir}${newName}`);
        uploadedFiles.push(newName);
        };
        res.status(200).json(uploadedFiles);
    }
const updateProfile = async (req, res) => {
    const {token} = req.cookies;
     try {
        const {
            firstName,profileImage,lastName,phone,occupation,homeAddress,website
        } = req.body;
        const verify = await jwt.verify(token,JWT_SECRET_KEY);
        const user = await User.findById(verify.id);
        if(!user){ res.status(404).json({
            status:'failure',
            message: 'user not found'
        })}
        await User.updateOne({_id:verify.id},{
            firstName,
            lastName,
            phone,occupation,profileImage,homeAddress,website
        });
        res.status(201).json({
            status: 'success',
            messsage: 'profile updated successfully'
        });

     } catch (error) {
        res.status(500).json({
            status:'failure',
            message:error.message
        })
     }
};

const inAccountPasswordUpdate = async (req, res) => {
    const {token} = req.cookies;
    const saltRound = 10;
    try {
        const {currentPassword,newPassword,} = req.body;
        const verifyUser = jwt.verify(token,JWT_SECRET_KEY);
        
        if(!verifyUser){
            returres.status(401).json({
                status:'failure',
                message: 'you are not authorized to perform this action'
            });
        }
        const storedUser = await User.findById(verifyUser.id);
        if(!storedUser){
           return res.status(404).json({
                status:'failure',
                message:'user not found'
            });
        }

        const passwordCompare = await bcrypt.compare(currentPassword, storedUser.password);
        if(!passwordCompare){
            return res.status(404).json({
                status:'failure',
                message:'current password mismatch'
            });
        }
        const password = await bcrypt.hash(newPassword,saltRound);
        await User.updateOne({_id:storedUser._id},{password:password});
        res.status(201).json({
            status:'success',
            message: 'Password updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'failure',
            message: error.message
        })
    }
};

const deleteAccount = async (req, res) => {
    const {token} = req.cookies;
    const verify = await jwt.verify(token,JWT_SECRET_KEY);
    if(!verify) {
        return res.status(401).json({status:'failure',message:"unauthorized action"});
    }
    await User.deleteOne({_id:verify.id});
    res.status(204).json({status:'success',message:"account deleted successfully"});
}
module.exports = {
    getProfile: getProfile,
    updateProfile,
    inAccountPasswordUpdate,
    uploadUserProfileImage,
    deleteAccount
}