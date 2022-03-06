const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;
module.exports = function () {
  mongoose
    .connect(
      uri,
      // || "mongodb://127.0.0.1:27017/discussions-forum"
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("can't connect to mongodb", err);
    });
};
