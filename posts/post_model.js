const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  photo: {
    name: String,
    data: String
  },
  title: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  age_restriction: {
    type: Boolean
  },
  username: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Post", PostSchema);
