const express = require('express');
const userController = require('../controller/userController');
const photoMiddleware = require('../middleware/photoMiddleware');
const app = express();
const userRouter = express.Router();
app.use(express.json());

userRouter.get('/profile',userController.getProfile);
userRouter.patch('/profile',userController.updateProfile);
userRouter.patch('/password',userController.inAccountPasswordUpdate);
userRouter.patch('/Profile-image',photoMiddleware.array('profile',1),userController.uploadUserProfileImage);

module.exports = userRouter;