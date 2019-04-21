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
// /**
//  * @param {string} username Somebody's username
//  */
// async function getUserByUsername(username) {
//   const query = { username: username };
//   return await User.findOne(query).select(
//     "username email _id email roles createdAt avatar"
//   );
// }
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
    path: 'userId',
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

// async function updateUserById(_id, update) {
//   const query = { _id: _id };
//   if (_.has(update, "password")) {
//     let hashedPassword = bcrypt.hashSync(update.password, 10);
//     update = { hashedPassword: hashedPassword };
//     updateUser(query, update);
//   } else {
//     updateUser(query, update);
//   }
// }
// // Helps the previous function
// async function updateUser(query, update) {
//   const updatedUser = await User.findOneAndUpdate(query, update, {
//     new: true
//   }).select("username email _id email roles createdAt");
//   return updatedUser;
// }

// async function deleteUserByUsername(username) {
//   const query = { username: username };
//   const deletedUser = await User.findOneAndRemove(query);
//   return deletedUser;
// }

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  addComment
};
