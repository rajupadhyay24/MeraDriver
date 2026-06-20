const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });

  }
};

module.exports = auth;









// const jwt = require("jsonwebtoken");

// exports.isAuthenticated = async (req, res, next) => {

//     try {

//         const authHeader = req.headers.authorization;

//         if (!authHeader) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Token missing"
//             });
//         }

//         const token = authHeader.split(" ")[1];

//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_SECRET
//         );

//         req.user = decoded;

//         next();

//     } catch (error) {

//         return res.status(401).json({
//             success: false,
//             message: "Invalid token"
//         });

//     }

// };