const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URL_DEVELOPMENT = process.env.MONGODB_URL_DEVELOPMENT;
const MONGODB_URL_PRODUCTION = process.env.MONGODB_URL_PRODUCTION;
let databaseUrl = "";

if(process.env.NODE_ENV === "production"){
    databaseUrl = MONGODB_URL_PRODUCTION;
}else{
    databaseUrl = MONGODB_URL_DEVELOPMENT;
}

const connectDB = mongoose.connect(databaseUrl)
.then(() => {
    console.log('database connection established on ' + process.env.NODE_ENV + ' with url: ' + databaseUrl);
})

module.exports = connectDB;