const express = require('express');


const{
 sendMobileOtp,
    verifyOtp
}= require('../controllers/otpController.js');


const router = express.Router();

router.post("/send", sendMobileOtp);

router.post("/verify", verifyOtp);

module.exports = router;