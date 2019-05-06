const express = require("express");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const userCtrl = require("../users/user_controller");
const postCtrl = require("./post_controller");

const router = express.Router();

// ROUTES

router.route("/")
  .get(asyncHandler(getAllPosts))
router.route("/:_id")
  .get(asyncHandler(getPostById))
  .delete(asyncHandler(deletePostById))

router.route("/:_id/comments").put(asyncHandler(addComment))

router
  .route("/:_id/likes")
  .post(asyncHandler(addLike))
  .put(asyncHandler(removeLike))


// FUNCTIONS

const multerUpload = require("../config/multer").upload;

// Add Post to user
router.post("", (req, res, next) => {
  multerUpload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      async function uploading() {
        let postData = JSON.parse(req.body.post);
        postDataWithPhoto = { ...postData, photo: req.file.filename };
        createdPost = await postCtrl
          .createPost(postDataWithPhoto)
          .catch(function (err) {
            if (err.name == "ValidationError") {
              res.status(422).json(err);
            } else {
              res.status(500).json(err);
            }
          });
        currentUser = await userCtrl
          .getUserById(postDataWithPhoto.user)
          .catch(function (err) {
            if (err) {
              res.status(422).json({
                success: false,
                msg: "No user found"
              });
            }
          });

        currentUser.posts.push(createdPost._id);
        currentUser.save();
        res.json({
          success: true,
          msg: "Posted",
          createdPost: createdPost
        });
      }
      uploading();
    }
  });
});

async function getPostById(req, res) {
  console.log(req.params._id);
  const _id = req.params._id;
  let post = await postCtrl.getPostById(_id);
  if (post == null) {
    console.log("no post found");
    res.json({ success: false, msg: "No such post" });
  } else {
    console.log("user found");
    res.json({ success: true, msg: "Post found", post: post });
  }
}

async function getAllPosts(req, res) {
  let posts = await postCtrl.getAllPosts();
  res.json(posts);
}

async function addComment(req, res) {
  let _id = req.params._id;
  let commentData = req.body.commentData;
  console.log(commentData)
  let comment = await postCtrl.addComment(_id, commentData)
  // .catch(function (err) {
  //   if (err.name == "ValidationError") {
  //     res.status(422).json(err);
  //   } else if (err) {
  //     res.status(500).json(err);
  //   }
  // });
  res.json({ success: true, msg: "Comment added", comment });
}


async function addLike(req, res) {
  console.log("yooo" + req.params._id)
  let _id = req.params._id;
  let userId = req.body.userId;
  let like = await postCtrl.addLike(_id, userId)
  // .catch(function (err) {
  //     if (err.name == "ValidationError") {
  //         res.status(422).json(err);
  //     } else {
  //         res.status(500).json(err);
  //     }
  // });
  res.json({ success: true, msg: "Like added", like });
}

async function removeLike(req, res) {
  let _id = req.params._id;
  let userId = req.body.userId;
  let like = await postCtrl.removeLike(_id, userId)
  // .catch(function (err) {
  //     if (err.name == "ValidationError") {
  //         res.status(422).json(err);
  //     } else {
  //         res.status(500).json(err);
  //     }
  // });
  res.json({ success: true, msg: "Like removed", like });
}

async function deletePostById(req, res) {
  let _id = req.params._id
  await postCtrl.deletePost(_id)
  res.json({ success: true, msg: "Comment deleted" });
}

module.exports = router;
