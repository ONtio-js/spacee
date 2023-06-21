const mongoose = require('mongoose');

const verificationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    verificationToken:{
        type: String
    },
    
},
{
    timestamps:  true
}
)

const verificationModel = mongoose.model('verification',verificationSchema);

module.exports = verificationModel;