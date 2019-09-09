const express = require("express");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const userCtrl = require("./user_controller");
const multerUpload = require("../../config/multer").upload;
const router = express.Router();
module.exports = router;

// ROUTES

router
  .route("/")
  .post(asyncHandler(createUser))
  .get(asyncHandler(userCtrl.getAllUsers));

router
  .route("/:_id")
  .put(
    passport.authenticate("jwt", {
      session: false
    }),
    asyncHandler(userCtrl.updateUserById)
  )
  .delete(
    passport.authenticate("jwt", {
      session: false
    }),
    asyncHandler(userCtrl.deleteUserById)
  );

router
  .route("/:username")
  .get(asyncHandler(userCtrl.getUserByUsername));

// FOLLOWERS
router
  .route("/:_id/follow")
  .post(asyncHandler(addUserToFollowing))
  .put(asyncHandler(removeUserFromFollowing));


router.route("/:username/followers").get(asyncHandler(getFollowersByUsername));
router.route("/:username/following").get(asyncHandler(getFollowingByUsername));

// FUNCTIONS
async function createUser(req, res) {
  multerUpload(req, res, err => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Failed to upload file"
      });
    } else {
      async function onPhotoUploaded() {
        let userData = JSON.parse(req.body.user);
        let userDataWithPhoto = {
          ...userData,
          avatar: req.file.filename
        };
        createdUser = await userCtrl
          .createUser(userDataWithPhoto)
        res.json({
          success: true,
          msg: "Account found",
          createdUser
        });
      }
      onPhotoUploaded()
        .catch(function (err) {
          if (err.name == "ValidationError") {
            res.status(422).json(err);
          } else {
            res.status(500).json(err);
          }
        });
    }
  });

}

async function addUserToFollowing(req, res) {
  let _id = req.params._id;
  let userId = req.body.userId;
  let follow = await userCtrl.addUserToFollowing(_id, userId)
  // .catch(function (err) {
  //     if (err.name == "ValidationError") {
  //         res.status(422).json(err);
  //     } else {
  //         res.status(500).json(err);
  //     }
  // });
  res.json({
    success: true,
    msg: "Followed",
    follow
  });
}

async function removeUserFromFollowing(req, res) {
  let _id = req.params._id;
  let userId = req.body.userId;
  console.log(userId);
  let follow = await userCtrl.removeUserFromFollowing(_id, userId)
  // .catch(function (err) {
  //     if (err.name == "ValidationError") {
  //         res.status(422).json(err);
  //     } else {
  //         res.status(500).json(err);
  //     }
  // });
  res.json({
    success: true,
    msg: "Unfollowed",
    follow
  });
}

async function getFollowersByUsername(req, res) {
  console.log(req.params.username);
  const username = req.params.username;
  let followers = await userCtrl.getFollowersByUsername(username);
  if (followers == null) {
    console.log("no user found");
    res.json({
      success: false,
      msg: "Followers not found"
    });
  } else {
    console.log("user found");
    res.json({
      success: true,
      msg: "Followers found",
      followers: followers
    });
  }
}

async function getFollowingByUsername(req, res) {
  console.log(req.params.username);
  const username = req.params.username;
  let following = await userCtrl.getFollowingByUsername(username);
  if (following == null) {
    console.log("no user found");
    res.json({
      success: false,
      msg: "Following not found"
    });
  } else {
    console.log("user found");
    res.json({
      success: true,
      msg: "Following found",
      following: following
    });
  }
}