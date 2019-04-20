const mongoose = require("mongoose");

const MyCommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MyComment"
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true
    }]
});

module.exports = mongoose.model("MyComment", MyCommentSchema);