const express = require("express");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const authCtrl = require("./auth_controller");

const router = express.Router();
module.exports = router;

router.route("/").post(asyncHandler(authenticate));

router.use(passport.authenticate("jwt", { session: false }));

async function authenticate(req, res) {
  let user = await authCtrl.authenticate(req.body);
  res.send(user);
}
