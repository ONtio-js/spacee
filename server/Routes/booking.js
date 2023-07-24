const { ReserveAPlace,retrievAllReservedPlace,retrievAReservedPlace } = require('../controller/bookingController');

const bookingRouter = require('express').Router();

bookingRouter.post('/bookings',ReserveAPlace);
bookingRouter.get('/user-bookings',retrievAllReservedPlace);

module.exports = bookingRouter;