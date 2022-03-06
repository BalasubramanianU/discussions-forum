const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

console.log("first", process.env.PORT);
console.log("second", process.env.MONGODB_URI);
console.log("third", process.env.NODE_ENV);

require("./startup/routes")(app);
require("./startup/db")();

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || "5000";
var server = app.listen(port, () => {
  console.log(`listening on port:${port}`);
});

module.exports = server;
