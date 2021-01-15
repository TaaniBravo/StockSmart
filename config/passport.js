const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "username"
  },
  async (username, password, done) => {
    // When a user tries to sign in this code runs
    const dbUser = await db.User.findOne({
      where: {
        username: username
      }
    }).catch( err => console.error(err) )
      // If there's no user with the given email
      if (dbUser === null) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      
      try{//return user if true
        if (await bcrypt.compare(password, dbUser(password))) {
            return done(null, dbUser);
        }else{//return false if wronf email
            return done(null, false, {message: "Incorrect password."});
        }
      }catch(e){
        return done(e)
      }

      
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => cb(null, user));

passport.deserializeUser((obj, cb) => cb(null, obj));

// Exporting our configured passport
module.exports = passport;