const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1024,
  },
  discussions: {
    type: [
      {
        topic: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 1024,
        },
        description: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 1024,
        },
        comments: [
          {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 1024,
          },
        ],
      },
    ],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
