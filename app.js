const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");
const cookieParser = require("cookie-parser");
const router = require("./src/routes");

const app = express();

require("./src/config/passport");


app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

module.exports = app;