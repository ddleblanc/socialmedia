const express = require("express");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const userCtrl = require("./user_controller");
const multerUpload = require("../config/multer").upload;
const router = express.Router();
module.exports = router;

// ROUTES

router
  .route("/")
  .post(asyncHandler(createUser))
  .get(asyncHandler(getAllUsers));

router
  .route("/:_id")
  .put(
    passport.authenticate("jwt", { session: false }),
    asyncHandler(updateUserById)
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    asyncHandler(deleteUserByUsername)
  );

router.route("/:username").get(asyncHandler(getUserByUsername));

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
      async function uploading() {
        let userData = JSON.parse(req.body.user);
        let userDataWithPhoto = { ...userData, avatar: req.file.filename };
        createdUser = await userCtrl
          .createUser(userDataWithPhoto)
          .catch(function(err) {
            if (err.name == "ValidationError") {
              res.status(422).json(err);
            } else {
              res.status(500).json(err);
            }
          });
        res.json({ success: true, msg: "Account found", createdUser });
      }
      uploading();
    }
  });

  // const user = req.body;
  // let createdUser = await userCtrl.createUser(user).catch(function(err) {
  //   if (err.name == "ValidationError") {
  //     res.status(422).json(err);
  //   } else {
  //     res.status(500).json(err);
  //   }
  // });
  // res.status(200).json({ success: true, msg: "Account found", createdUser });
}

async function getAllUsers(req, res) {
  let users = await userCtrl.getAllUsers();
  res.json(users);
}

async function getUserByUsername(req, res) {
  console.log(req.params.username);
  const username = req.params.username;
  let user = await userCtrl.getUserByUsername(username);
  if (user == null) {
    console.log("no user found");
    res.json({ success: false, msg: "No such user" });
  } else {
    console.log("user found");
    res.json({ success: true, msg: "Account found", user: user });
  }
}

async function updateUserById(req, res) {
  const _id = req.params._id;
  const update = req.body;
  let updatedUser = await userCtrl
    .updateUserById(_id, update)
    .catch(function(err) {
      if (err.name == "ValidationError") {
        res.status(422).json(err);
      } else {
        res.status(500).json(err);
      }
    });
  res.status(200).json(updatedUser);
}

async function deleteUserByUsername(req, res) {
  if (req.user.username == req.params.username) {
    const username = req.user.username;
    const deletedUser = await userCtrl.deleteUserByUsername(username);
    res.json({ success: true, msg: "Account deleted", deletedUser });
  } else {
    res.json({ success: false, msg: "Unauthorized" });
  }
}
