const Booking = require('../model/booking');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const ReserveAPlace = async (req, res) => {
    const {token} = req.cookies;
    const {
        place, checkIn, checkOut, maxGuests,
        fullname, email, phone, price
    } = req.body;
    try {
        const userData = await jwt.verify(token,JWT_SECRET_KEY);
        const booking = await Booking.create({place, checkIn, checkOut, fullname, maxGuests, email, phone, price,user:userData.id});
        if (!booking) {
            res.status(422).json({ message: "bad request" });
        }
        
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const retrievAReservedPlace =() =>{

}

const retrievAllReservedPlace =async (req, res) =>{
    const {token}  = req.cookies;
    try{
        const userData = await jwt.verify(token,JWT_SECRET_KEY);
        const {id} = userData;
        const bookingData = await Booking.find({user:id}).populate('place');
        res.status(200).json(bookingData);
    }catch(e){
        res.status(500).json({message:e.message});
    }
}
module.exports = {
    ReserveAPlace,retrievAllReservedPlace,retrievAReservedPlace
}