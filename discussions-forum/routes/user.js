const express = require("express");
const router = express.Router();

const { User } = require("../models/user");
const { passHash, validateSignUp, validateLogin } = require("../utils/user");

var passport = require("passport");
var initializePassport = require("../middlewares/auth");
initializePassport(passport);

router.post("/login", function (req, res) {
  passport.authenticate("local", function (error, user, info) {
    if (error) return res.status(400).send(error);
    if (!user) res.status(400).send(info);
    else res.status(200).send(user.userName);
  })(req, res);
});

router.post("/signup", async (req, res) => {
  const { error } = validateSignUp(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    let user;
    user = await User.findOne({ userName: req.body.userName });
    if (user) return res.status(400).send("User already exists.");

    user = new User(req.body);
    user.password = await passHash(user.password);
    await user.save();

    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
