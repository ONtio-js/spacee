const Router = require('express').Router();
const authRouter = require('./auth');
const bookingRouter = require('./booking');
const placeRouter = require('./places');
const userRouter = require('./user');

Router.use(authRouter);
Router.use(userRouter);
Router.use(placeRouter);
Router.use(bookingRouter);

module.exports = Router;