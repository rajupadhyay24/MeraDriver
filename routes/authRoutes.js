const express = require('express');

const passport = require('passport');

const jwt = require('jsonwebtoken');


const {
  register,
  login,
  sendOtp,
  verifyOtp,
  profile
} = require('../controllers/authController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/send-otp', sendOtp);

router.post('/verify-otp', verifyOtp);

router.get('/profile', authMiddleware, profile);


// GOOGLE LOGIN
router.get(

  '/google',

  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);


// GOOGLE CALLBACK
router.get(

  '/google/callback',

  passport.authenticate('google', {
    session: false,
    failureRedirect: '/login',
  }),

  async (req, res) => {

    console.log(req.user);
    
    const token = jwt.sign(

      {
        id: req.user.id,
        email: req.user.email,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: '7d',
      }
    );

    res.status(200).json({
      message: 'Google login successful',
      token,
      user: req.user,
    });
  }
);


module.exports = router;








// const express = require("express");

// const { register, login } = require("../controllers/authController");

// const { isAuthenticated } = require("../middleware/authMiddleware");

// const router = express.Router();

// // Register
// router.post("/register", register);

// // Login
// router.post("/login", login);

// // Protected Route
// router.get("/profile", isAuthenticated, (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Protected route accessed",
//     user: req.user,
//   });
// });

// module.exports = router;


