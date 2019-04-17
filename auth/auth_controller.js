const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../users/user_model");
const config = require("../config/database");

module.exports = {
  authenticate
};

/**
 * @param {object} user Somebody's email and password
 */
async function authenticate(user) {
  const query = { username: user.username };
  const password = user.password;
  const fetchedUser = await User.findOne(query);
  if (fetchedUser == null) {
    return {
      success: false,
      msg: "no such user"
    };
  }
  const match = await bcrypt.compare(password, fetchedUser.hashedPassword);

  if (match) {
    const token = jwt.sign(fetchedUser.toJSON(), config.secret, {
      expiresIn: 604800 // 1 week
    });
    return {
      success: true,
      token: "bearer " + token,
      user: {
        id: fetchedUser._id,
        name: fetchedUser.username,
        email: fetchedUser.email,
        avatar: fetchedUser.avatar
      }
    };
  } else {
    return {
      success: false,
      msg: "Invalid username or password"
    };
  }
}
