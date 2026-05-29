const sendOtp = require("../utils/sendOtp");

const otpStore = {};



// SEND OTP CONTROLLER
const sendMobileOtp = async (req, res) => {

    try {

        const { mobile } = req.body;

        // Validate Mobile Number
        if (!mobile) {
            return res.status(400).json({
                success: false,
                message: "Mobile number required"
            });
        }

        // Generate 6 Digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        // Store OTP Temporarily
        otpStore[mobile] = otp;

        console.log("Generated OTP:", otp);

        // Send OTP using API
        const apiResponse = await sendOtp(mobile, otp);

        if (!apiResponse) { return res.status(500).json({ success: false, message: "Failed to send OTP" }); }
        
        console.log("API Response:", apiResponse);

        return res.status(200).json({
            success: true,
            message: "OTP Sent Successfully",
            otp: otp // Remove in production
        });

    } catch (error) {

        console.log("Send OTP Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};




// VERIFY OTP CONTROLLER
const verifyOtp = async (req, res) => {

    try {

        const { mobile, otp } = req.body;

        // Check OTP
        if (otpStore[mobile] == otp) {

            // Remove OTP after verification
            delete otpStore[mobile];

            return res.status(200).json({
                success: true,
                message: "OTP Verified Successfully"
            });
        }

        return res.status(400).json({
            success: false,
            message: "Invalid OTP"
        });

    } catch (error) {

        console.log("Verify OTP Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};




// EXPORT CONTROLLERS
module.exports = {
    sendMobileOtp,
    verifyOtp
};