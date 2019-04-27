const bcrypt = require("bcrypt");
const User = require("./user_model");
var _ = require("lodash/core");

/**
 * @param {object} user New user's full name, email & password
 */
async function createUser(user) {
  if (_.has(user, "password")) {
    user.hashedPassword = bcrypt.hashSync(user.password, 10);
    delete user.password;
    return await new User(user).save();
  } else {
    return await new User(user).save();
  }
}

async function getAllUsers() {
  return await User.find();
}
/**
 * @param {string} username Somebody's username
 */
async function getUserByUsername(username) {
  const query = { username: username };
  return await User.findOne(query).select(
    "username email _id email roles createdAt avatar posts followers following"
  ).populate({
    path: 'posts',
    populate: {
      path: 'comments',
      populate: {
        path: 'user',
        model: 'User',
        select: 'username avatar'
      }
    }
  }
  )
}
// Get all followers for user
async function getFollowersByUsername(username) {
  const query = { username: username };

  user = await User.findOne(query).select(
    "followers"
  ).populate({
    path: 'followers',
    select: '_id username avatar'
  }
  )
  let followers = await user.followers;
  return await followers;
}
// Get all user the user is following
async function getFollowingByUsername(username) {
  const query = { username: username };

  user = await User.findOne(query).select(
    "following"
  ).populate({
    path: 'following',
    select: '_id username avatar'
  }
  )
  let following = await user.following;
  return await following;
}

/**
 * @param {string} id Somebody's user id
 */
async function getUserById(id) {
  const query = { _id: id };
  return await User.findOne(query);
}

async function updateUserById(_id, update) {
  const query = { _id: _id };
  if (_.has(update, "password")) {
    let hashedPassword = bcrypt.hashSync(update.password, 10);
    update = { hashedPassword: hashedPassword };
    updateUser(query, update);
  } else {
    updateUser(query, update);
  }
}
// Helps the previous function
async function updateUser(query, update) {
  const updatedUser = await User.findOneAndUpdate(query, update, {
    new: true
  }).select("username email _id email roles createdAt");
  return updatedUser;
}

async function deleteUserByUsername(username) {
  const query = { username: username };
  const deletedUser = await User.findOneAndRemove(query);
  return deletedUser;
}


async function addUserToFollowing(theirId, userId) {
  userToFollow = await getUserById(theirId);
  await userToFollow.followers.push(userId)
  await userToFollow.save()

  user = await getUserById(userId);
  await user.following.push(theirId);
  return await user.save();
  // if (comment.likes.includes(userId)) {
  //     console.log("it works")
  // }
}

async function removeUserFromFollowing(theirId, userId) {
  userToStopFollowing = await getUserById(theirId);
  await userToStopFollowing.followers.pop(userId);
  await userToStopFollowing.save();

  user = await getUserById(userId);
  await user.following.pop(theirId);
  return await user.save();
  // if (comment.likes.includes(userId)) {
  //     console.log("it works")
  // }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserByUsername,
  updateUserById,
  getUserById,
  deleteUserByUsername,
  addUserToFollowing,
  removeUserFromFollowing,
  getFollowersByUsername,
  getFollowingByUsername
};
