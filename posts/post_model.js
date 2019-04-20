const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true
  },
  title: {
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
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "MyComment"
  }]
});

module.exports = mongoose.model("Post", PostSchema);
