const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    addresses :{
        type : String,
        required : true
    },
    Description :{
        type : String,
        required : true
    },
    image :{
        type : [String],
        required : true
    },
    perks :{
        type : [String],
        required : true
    },
    extraInfo :{
        type : String,
        required : true
    },
    checkIn: {
        type : String,
        required : true
    },
    checkOut: {
        type : String,
        required : true
    },
    maxGuests :{
        type : Number,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const placeModel = mongoose.model('place', placeSchema);

module.exports = placeModel;