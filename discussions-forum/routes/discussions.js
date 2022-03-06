const { User } = require("../models/user");
const { validateDiscussion, validateComment } = require("../utils/user");

const express = require("express");
const router = express.Router();

var passport = require("passport");
var initializePassport = require("../middlewares/auth");
initializePassport(passport);

router.get("/", async (req, res) => {
  let user = await User.find(
    {
      discussions: { $exists: true, $type: "array", $ne: [] },
    },
    { discussions: 1, _id: 0 }
  );
  if (!user) return res.status(400).send("No records found.");

  res.status(200).send(user);
});

router.post("/", async (req, res) => {
  passport.authenticate("local", async function (error, user, info) {
    if (error) return res.status(400).send(error);
    if (!user) res.status(400).send(info);
    else {
      const { error } = validateDiscussion(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      try {
        let discussion = await User.findOne({
          discussions: { $elemMatch: { topic: req.body.discussion.topic } },
        });
        if (discussion) return res.status(400).send("Topic already exists.");

        user.discussions.push(req.body.discussion);
        await user.save();

        res.status(200).send();
      } catch (error) {
        res.status(400).send(error);
      }
    }
  })(req, res);
});

router.post("/:topic", async (req, res) => {
  passport.authenticate("local", async function (error, user, info) {
    if (error) return res.status(400).send(error);
    if (!user) res.status(400).send(info);
    else {
      const { error } = validateComment(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      try {
        user = await User.findOne({
          discussions: { $elemMatch: { topic: req.body.topic } },
        });
        if (!user) return res.status(400).send("Topic not found.");

        user.discussions.forEach((element) => {
          if (element.topic === req.body.topic)
            element.comments.push(req.body.comment);
        });
        await user.save();

        res.status(200).send();
      } catch (error) {
        res.status(400).send(error);
      }
    }
  })(req, res);
});

module.exports = router;
