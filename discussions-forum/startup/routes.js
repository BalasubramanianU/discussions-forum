const express = require("express");

const discussions = require("../routes/discussions");
const user = require("../routes/user");

module.exports = function (app) {
  app.use(express.json());
  app.use("/discussions-list", discussions);
  app.use("/user", user);
};
