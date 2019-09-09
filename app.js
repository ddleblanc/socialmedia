const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const db = require("./db/index");
const users = require("./server/users/user_routes");
const auth = require("./server/auth/auth_routes");
const posts = require("./server/posts/post_routes");
const comments = require("./server/comments/comment_routes");
const compression = require('compression');
process.setMaxListeners(0);

// Port Number
const PORT = 3000;

// CORS Middleware //
app.use(cors());

// https://expressjs.com/en/advanced/best-practice-performance.html
app.use(compression());

// Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: "true"
}));
app.use(bodyParser.json({
  limit: 5 * 1024 * 2014
}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Routes
app.use("/api/v1/users", users);
app.use("/api/v1/auth", auth);
app.use("/api/v1/posts", posts);
app.use("/api/v1/comments", comments)
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Connect to databse, then start Server
db.connect().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
  });
});

module.exports = app;