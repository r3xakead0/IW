import passport from "passport";
const LocalStrategy = require('passport-local').Strategy;

import User from "../models/User";
import helpers from "./helpers";

passport.use('local.signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (username, password, done) => {

  const user = await User.findOne({
      attributes: ['id', 'name', 'password', 'fullname', 'email'],
      where: { name: username } 
  });

  if (user) {
    const validPassword = await helpers.matchPassword(password, user.password);
    if (validPassword) {
      done(null, user);
    } else {
      done(null, false);
    }
  } else {
    return done(null, false);
  }
}));


