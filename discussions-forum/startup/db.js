const mongoose = require("mongoose");

module.exports = function () {
  // mongoose
  //   .connect("mongodb://127.0.0.1:27017/discussions-forum", {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  //   .then(() => {
  //     console.log("connected to mongodb");
  //   })
  //   .catch((err) => {
  //     console.log("can't connect to mongodb", err);
  //   });
  mongoose
    .connect(process.env.MONOGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("can't connect to mongodb", err);
    });
};
