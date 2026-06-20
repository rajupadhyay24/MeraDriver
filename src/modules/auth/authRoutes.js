// const express = require("express");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");

// const {
//   register,
//   login,
//   logout,
//   sendOtp,
//   verifyOtp,
//   profile,
// } = require("./authController");

// const authMiddleware = require("../../middleware/authMiddleware");

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.post("/logout", logout);
// router.post("/send-mail-otp", sendOtp);
// router.post("/verify-mail-otp", verifyOtp);
// router.get("/profile", authMiddleware, profile);

// // GOOGLE LOGIN
// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   }),
// );

// // GOOGLE CALLBACK
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     session: false,
//     failureRedirect: "/login",
//   }),
//   async (req, res) => {
//     const token = jwt.sign(
//       {
//         id: req.user.id,
//         email: req.user.email,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       },
//     );

//     res.status(200).json({
//       message: "Google login successful",
//       token,
//       user: req.user,
//     });
//   },
// );

// module.exports = router;
