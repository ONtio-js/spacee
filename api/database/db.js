const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_URL;
const connectDB = mongoose.connect(MONGODB_URL)
.then(() => {
    console.log('database connection established');
})

module.exports = connectDB;