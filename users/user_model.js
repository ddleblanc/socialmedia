const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [2, "Username must be at least 2 characters."],
      maxlength: [20, "Username must be less than 20 characters."],
      required: [true, "Your username cannot be blank."],
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email."
      ]
    },
    avatar: {
      type: String,
      required: true
    },
    wallpaper: {
      name: String,
      data: String
    },
    hashedPassword: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
      }
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MyComment"
      }
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    roles: [
      {
        type: String
      }
    ]
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("User", UserSchema);
