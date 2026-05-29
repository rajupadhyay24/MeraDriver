const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');

const passport = require('passport');

const session = require('express-session');

require('./config/passport');

const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes')

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(

  session({
    secret: process.env.SESSION_SECRET,

    resave: false,

    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use("/api/mobile-otp", otpRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
