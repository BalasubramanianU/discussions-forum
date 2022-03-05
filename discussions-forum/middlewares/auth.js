const { User } = require("../models/user");

const bcrypt = require("bcrypt");
var LocalStrategy = require("passport-local");
const { validateLogin } = require("../utils/user");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "userName",
        passwordField: "password",
      },
      async function verify(username, password, done) {
        const { error } = validateLogin({ userName: username, password });
        if (error)
          return done(null, false, { message: "Invalid credentials." });

        try {
          let user = await User.findOne({ userName: username });
          if (!user)
            return done(null, false, { message: "Incorrect username." });
          if (await bcrypt.compare(password, user.password))
            return done(null, user);
          else return done(null, false, { message: "Incorrect password." });
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
