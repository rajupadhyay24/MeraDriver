const express = require('express');


const{
 sendMobileOtp,
    verifyOtp
}= require('../controllers/otpController.js');


const router = express.Router();

router.post("/send-otp", sendMobileOtp);

router.post("/verify-otp", verifyOtp);

module.exports = router;