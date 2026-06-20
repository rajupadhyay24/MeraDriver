const passport = require('passport');

const GoogleStrategy = require(
  'passport-google-oauth20'
).Strategy;

const prisma = require('./prisma');


passport.use(

  new GoogleStrategy(

    {
      clientID: process.env.GOOGLE_CLIENT_ID,

      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      callbackURL:
        'http://localhost:8000/api/auth/google/callback',
    },

    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {

      try {

         console.log("the profile data is the ", profile);
        const email = profile.emails[0].value;

        let user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        // CREATE USER
        if (!user) {

          user = await prisma.user.create({
            data: {
              name: profile.displayName,

              email,

              googleId: profile.id,

              image: profile.photos[0].value,

              isVerified: true,
            },
          });
        }

        return done(null, user);

      } catch (error) {

        return done(error, null);

      }
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser(async (id, done) => {

  try {

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    done(null, user);

  } catch (error) {

    done(error, null);

  }
});