const app = require("./app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const passport = require("passport");
// const session = require("express-session");
// const swaggerUi = require("swagger-ui-express");
// const swaggerSpec = require("./src/config/swagger");
// const cookieParser = require("cookie-parser");
// require("./src/config/passport");

// const { router } = require("./src/routes");


// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(cookieParser());

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   }),
// );

// app.use(passport.initialize());
// app.use(passport.session());
// console.log(router);
// app.use("/", router);


// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });










// const authRoutes = require("./src/modules/auth/authRoutes");
// const otpRoutes = require("./src/modules/auth/otpRoutes");
// const categoryRoutes = require("./src/modules/categories/categoryRoutes");
// const subCategoryRoutes = require("./src/modules/sub_categories/subCategoryRoutes");
// const productCardRoutes = require("./src/modules/products_card/productCardRoutes");
// const productDetailRoutes = require("./src/modules/product_details/productDetailRoutes");



// app.use("/api/auth", authRoutes);
// app.use("/api/mobile-otp", otpRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/sub-categories", subCategoryRoutes);
// app.use("/api/product-cards", productCardRoutes);
// app.use("/api/product-details", productDetailRoutes);
