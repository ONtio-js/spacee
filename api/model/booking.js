const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    place:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'place',
    },
    checkIn:{
        type: Date,
        required: true,
    },
    checkOut:{
        type: Date,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
        required: true,
    },
    fullname:{ 
        type:String,
        required:true
        },
    price:{
        type:String,
        required:true
    },
    maxGuests:{
        type:Number,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

}
)

const bookingModel = mongoose.model('Booking',bookingSchema);
module.exports = bookingModel;