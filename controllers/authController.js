const prisma = require('../config/prisma');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const transporter = require('../config/mailer');


// REGISTER
const register = async (req, res) => {

  try {

    const { name, email, password, mobile } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
  data: {
    name,
    email,
    password: hashedPassword,
    mobile,
  },
});

    res.status(201).json({
      message: 'User registered successfully',
      user
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


// LOGIN
const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(400).json({
        message: 'User not found'
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid credentials'
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


// SEND EMAIL OTP
const sendOtp = async (req, res) => {

  try {

    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    await prisma.user.update({
      where: {
        email
      },
      data: {
        otp
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: email,

      subject: 'Your OTP Verification Code',

      html: `
        <h2>Email Verification</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
      `
    });

    res.status(200).json({
      message: 'OTP sent to email successfully'
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


// VERIFY EMAIL OTP
const verifyOtp = async (req, res) => {

  try {

    const { email, otp } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        message: 'Invalid OTP'
      });
    }

    await prisma.user.update({
      where: {
        email
      },
      data: {
        isVerified: true,
        otp: null
      }
    });

    res.status(200).json({
      message: 'Email verified successfully'
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


// PROFILE
const profile = async (req, res) => {

  try {
console.log("REQ.USER:", req.user);
    const user = await prisma.user.findUnique({
      where: {
        id: 3
      }
    });

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


module.exports = {
  register,
  login,
  sendOtp,
  verifyOtp,
  profile
};









// const pool = require("../config/db");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");


// // ================= REGISTER =================

// exports.register = async (req, res) => {

//     try {

//         const { name, email, password } = req.body;

//         // check existing user
//         const existingUser = await pool.query(
//             "SELECT * FROM users WHERE email = $1",
//             [email]
//         );

//         if (existingUser.rows.length > 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email already exists"
//             });
//         }

//         // hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // insert user
//         const newUser = await pool.query(
//             `INSERT INTO users (name, email, password)
//              VALUES ($1, $2, $3)
//              RETURNING id, name, email, role`,
//             [name, email, hashedPassword]
//         );

//         res.status(201).json({
//             success: true,
//             message: "User registered successfully",
//             user: newUser.rows[0]
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message
//         });

//     }

// };



// // ================= LOGIN =================

// exports.login = async (req, res) => {

//     try {

//         const { email, password } = req.body;

//         // check user
//         const userResult = await pool.query(
//             "SELECT * FROM users WHERE email = $1",
//             [email]
//         );

//         console.log("the userresult is:" ,userResult);

//         if (userResult.rows.length === 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid credentials"
//             });
//         }

//         const user = userResult.rows[0];
//         console.log("the user data is the", user);

//         // compare password
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid credentials"
//             });
//         }

//         // generate JWT
//         const token = jwt.sign(
//             {
//                 id: user.id,
//                 role: user.role
//             },
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: "7d"
//             }
//         );

//         res.status(200).json({
//             success: true,
//             message: "Login successful",
//             token,
//             user: {
//                 id: user.id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role
//             }
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message
//         });

//     }

// };