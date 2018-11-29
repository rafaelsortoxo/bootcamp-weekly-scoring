const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

module.exports = User => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        callbackURL: '/auth/google/callback',
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let existingUser = await User.findOne({ googleId: profile.id });
          // googleId already linked
          if (existingUser) {
            return done(null, existingUser);
          }
          // Check for aureaEmail
          if (
            profile.emails.length &&
            profile.emails[0].value.includes('aurea.com')
          ) {
            // Check for aurea email in DB
            existingUser = await User.findOne({
              aureaEmail: profile.emails[0].value
            });
            if (existingUser) {
              // It was not find by googleId so we need to link the googleId
              existingUser.googleId = profile.id;
              existingUser
                .save()
                .then()
                .catch(err =>
                  console.err.bind(
                    console,
                    `Error adding googleId to ${existingUser.aureaEmail}`
                  )
                );
              return done(null, user);
            }
            return done(new Error('Could not find email in DB'));
          }
          done(new Error('Only users from Aurea allowed'), null);
        } catch (err) {
          done(err, null);
        }
      }
    )
  );
};
