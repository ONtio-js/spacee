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
.post('/request-password-reset-link',authContoller.requestPasswordResetLink)
.patch('/email-verification',verificationController.verifyUser)
.patch('/reset-password',authContoller.resetPassword)
.post('/email-verification-request',verificationController.sendVerificationRequest);

module.exports = authRouter;