const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const routes = require('./Routes/index');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use('/controller/images', express.static((__dirname +'/controller/images')));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
    // sameSites: true,
    // secure: true
}));
app.use(routes)
connectDB;
app.listen(PORT);