const Post = require("./post_model");
const MyComment = require("../comments/comment_model");

/**
 * @param {object} user New user's full name, email & password
 */
async function createPost(post) {
  return await new Post(post).save();
}

async function getAllPosts() {
  return await Post.find();
}

/**
 * @param {string} id A Post's id
 */
async function getPostById(id) {
  const query = { _id: id };
  return await Post.findOne(query).populate({
    path: 'comments',
    populate: {
      path: 'user',
      model: 'User',
      select: 'username avatar'
    }
  }
  ).populate({
    path: 'user',
    select: 'username avatar'
  })
}

async function addComment(id, comment) {
  console.log(comment);
  post = await getPostById(id)
  comment = await new MyComment(comment).save()
  post.comments.push(comment._id);
  return await post.save();

}

async function addLike(postId, userId) {
  post = await getPostById(postId);
  await post.likes.push(userId);
  return await post.save();
  // if (comment.likes.includes(userId)) {
  //     console.log("it works")
  // }
}

async function removeLike(postId, userId) {
  post = await getPostById(postId);
  await post.likes.pop(userId);
  await post.save();
  // if (comment.likes.includes(userId)) {
  //     console.log("it works")
  // }
}

async function deletePost(id) {
  const query = { _id: id };
  return await Post.findByIdAndRemove(query)
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  addComment,
  addLike,
  removeLike,
  deletePost
};
