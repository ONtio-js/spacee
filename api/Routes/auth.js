const express = require('express');
const authContoller = require('../controller/authController');
const verificationController = require('../controller/verificationController');
const {signUpRules,loginRules} = require('../Request/authValidator');
const authRouter = express.Router();
const app = express();
app.use(express.json());


authRouter
.post('/register',signUpRules,authContoller.register)
.post('/login',loginRules,authContoller.login)
.post('/logout',authContoller.logout)
// .patch('/email-verification',authContoller.verifyEmail);

module.exports = authRouter;