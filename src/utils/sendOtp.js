const axios = require("axios");

const sendOtp = async (mobile, otp) => {

    try {

        const smsmessage = `Your overseas education lane registration OTP is ${otp}`;

        const response = await axios.get(
            "https://connectexpress.in/api/v3/",
            {
                params: {
                    method: "sms",

                    api_key: process.env.SMS_API_KEY,

                    sender: process.env.SMS_SENDER,

                    to: mobile,

                    message: smsmessage
                }
            }
        );

        console.log(
            "FULL RESPONSE:",
            JSON.stringify(response.data, null, 2)
        );

        return response.data;

    } catch (error) {

        console.log(
            "SMS ERROR:",
            error.response?.data || error.message
        );

        return null;
    }
};


module.exports = sendOtp;

