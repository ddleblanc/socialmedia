const Post = require("./post_model");

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
// /**
//  * @param {string} id Somebody's user id
//  */
// async function getUserById(id) {
//   const query = { _id: id };
//   return await User.findOne(query);
// }

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
  getAllPosts
};
