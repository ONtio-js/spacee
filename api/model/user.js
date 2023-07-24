const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
        default:null,
    },
    phone:{
        type:String,
        default:null,
    },
    occupation:{
        type:String,
        default:null,
    },
    homeAddress:{
        type:String,
        default:null,
    },
    website:{
        type:String,
        default:null,
    },
    profileImage:{
        type:String,
        default:null,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
    },
    isVerified: {
        type:Boolean,
        default:false
    },
    
},
{
    timestamps:true
});

const userModel = mongoose.model('User',userSchema);
module.exports = userModel;