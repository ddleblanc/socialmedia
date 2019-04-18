const express = require("express");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const userCtrl = require("../users/user_controller");
const postCtrl = require("./post_controller");

const router = express.Router();

// ROUTES

router
  .route("/")
  .post(asyncHandler(createPost))
  .get(asyncHandler(getAllPosts));

// FUNCTIONS

async function createPost(req, res) {
  const post = req.body;

  let createdPost = await postCtrl.createPost(post);

  let user = await userCtrl.getUserById(post.userId);
  console.log(await user);
  if (user == null) {
    console.log("no user found");
    res.send({ success: false, msg: "No such user" });
  } else {
    await user.posts.push(await createdPost._id);
    await user.save();

    // res.send({ success: true, msg: "Posted", _id: post._id });
  }

  res.status(200).json({ success: true, msg: "Posted" });
}

async function getAllPosts(req, res) {
  let posts = await postCtrl.getAllPosts();
  res.json(posts);
}

module.exports = router;
