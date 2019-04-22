const MyComment = require("./comment_model");


/**
 * @param {string} id A Post's id
 */
async function getCommentById(commentId) {
    const query = { _id: commentId };
    return await MyComment.findOne(query);
}

async function addLike(commentId, userId) {
    comment = await getCommentById(commentId);
    await comment.likes.push(userId);
    return await comment.save();
    // if (comment.likes.includes(userId)) {
    //     console.log("it works")
    // }
}

async function removeLike(commentId, userId) {
    comment = await getCommentById(commentId);
    await comment.likes.pop(userId);
    await comment.save();
    // if (comment.likes.includes(userId)) {
    //     console.log("it works")
    // }
}

async function deleteComment(id) {
    const query = { _id: id };
    return await MyComment.findByIdAndRemove(query)
}

module.exports = {
    addLike,
    removeLike,
    deleteComment
};
