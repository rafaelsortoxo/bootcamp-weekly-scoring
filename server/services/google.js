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
          const existingUser = await User.findOne({ googleId: profile.id });
          if (existingUser) {
            return done(null, existingUser);
          }

          if (
            profile.emails.length &&
            profile.emails[0].value.includes('aurea.com')
          ) {
            const user = await new User({
              googleId: profile.id,
              displayName: profile.displayName
            }).save();
            done(null, user);
          } else {
            done(new Error('Only users from Aurea allowed'), null);
          }
        } catch (err) {
          done(err, null);
        }
      }
    )
  );
};
