const express = require('express');
const userController = require('../controller/userController');
const app = express();
const userRouter = express.Router();
app.use(express.json());

userRouter.get('/profile',userController.getProfile);

module.exports = userRouter;