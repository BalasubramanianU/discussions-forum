const express = require("express");
const cors = require("cors");
const passport = require("passport");
const app = express();

app.use(cors());

require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || "5000";
var server = app.listen(port, () => {
  console.log(`listening on port:${port}`);
});

module.exports = server;
