import passport from "passport";
import User from "../models/User";
import helpers from "./helpers";

const LocalStrategy = require('passport-local').Strategy;

passport.use('local.signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, password, done) => {

  const user = await User.findOne({
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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({
    where: { id } 
  });
  done(null, user);
});