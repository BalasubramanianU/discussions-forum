const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

require("./startup/routes")(app);
require("./startup/db")();

/* When needed to deploy frontend and backend as a single folder, this code helps in redirecting 
the flow from backend to frontend */
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

const port = process.env.PORT || "5000";
var server = app.listen(port, () => {
  console.log(`listening on port:${port}`);
});

module.exports = server;
