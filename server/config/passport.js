const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = function (passport) {
   passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      // Match User
      let user = await User.findOne({ email });
      if (!user) {
         // No User Found
         return done(null, false, { message: 'Incorrect username' });
      }
      // User Found Check Password
      bcrypt.compare(password, user.password, (err, isMatch) => {
         if (err) throw err;
         if (isMatch) {
            return done(null, user, { message: 'Successfully logged in' });
         } else {
            return done(null, false, { message: 'Incorrect password' });
         }
      });
   }));
   passport.serializeUser(function (user, done) {
      done(null, user.id);
   });

   passport.deserializeUser(function (id, done) {
      User.findById(id, function (err, user) {
         done(err, user);
      });
   });
}