const express = require("express");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const commentCtrl = require("./comment_controller");

const router = express.Router();

// ROUTES

router.route("/:_id").post(asyncHandler(addLike))
    .put(asyncHandler(removeLike))
    .delete(asyncHandler(deleteComment))




async function addLike(req, res) {
    let _id = req.params._id;
    let userId = req.body.userId;
    let like = await commentCtrl.addLike(_id, userId)
    // .catch(function (err) {
    //     if (err.name == "ValidationError") {
    //         res.status(422).json(err);
    //     } else {
    //         res.status(500).json(err);
    //     }
    // });
    res.json({ success: true, msg: "Like comment", like });
}

async function removeLike(req, res) {
    let _id = req.params._id;
    let userId = req.body.userId;
    let like = await commentCtrl.removeLike(_id, userId)
    // .catch(function (err) {
    //     if (err.name == "ValidationError") {
    //         res.status(422).json(err);
    //     } else {
    //         res.status(500).json(err);
    //     }
    // });
    res.json({ success: true, msg: "Like removed", like });
}

async function deleteComment(req, res) {
    let _id = req.params._id
    await commentCtrl.deleteComment(_id)
    res.json({ success: true, msg: "Comment deleted" });
}


module.exports = router;
