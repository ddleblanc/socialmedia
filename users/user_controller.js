const bcrypt = require("bcrypt");
const User = require("./user_model");
var _ = require("lodash/core");

/**
 * @param {object} user New user's full name, email & password
 */
async function createUser(user) {
  const query = { username: user.username };
  if (_.has(user, "password")) {
    user.hashedPassword = bcrypt.hashSync(user.password, 10);
    delete user.password;
    await new User(user).save();
    return await User.findOne(query).select(
      "username email _id roles createdAt avatar posts followers following"
    )
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
async function getUserByUsername(req, res, next) {
  try {
    const query = { username: req.params.username };
    const user = await User.findOne(query).select(
      "username email _id roles createdAt avatar posts followers following"
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
    if (user == null) {
      console.log("no user found");
      res.json({ success: false, msg: "No such user" });
    } else {
      console.log("user found");
      res.json({ success: true, msg: "Account found", user: user });
    }
  } catch (e) {
    next(e)
  }

}


// console.log(req.params.username);
// const username = req.params.username;
// let user = await userCtrl.getUserByUsername(username);





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

async function updateUserById(req, res, next) {
  const update = req.body;
  const query = { _id: req.params._id };
  if (_.has(update, "password")) {
    try {
      let hashedPassword = bcrypt.hashSync(update.password, 10);
      update = { hashedPassword: hashedPassword };
      const updatedUser = updateUser(query, update);
      res.status(201).json({ success: true, msg: "User Updated", user: updatedUser });
    } catch (e) {
      next(e)
    }
  } else {
    updateUser(query, update).catch(function (err) {
      if (err.name == "ValidationError") {
        res.status(422).json(err);
      } else {
        res.status(500).json(err);
      }
    });
  }
}


// const _id = req.params._id;
// const update = req.body;
// console.log(_id);
// let updatedUser = await userCtrl
//   .updateUserById(_id, update)
//   .catch(function (err) {
//     if (err.name == "ValidationError") {
//       res.status(422).json(err);
//     } else {
//       res.status(500).json(err);
//     }
//   });
// res.status(200).json({ success: true, msg: "User Updated", user: updatedUser });







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
