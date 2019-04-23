const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const db = require("./db/index");

process.setMaxListeners(0);

const app = express();

const users = require("./users/user_routes");
const auth = require("./auth/auth_routes");
const posts = require("./posts/post_routes");
const comments = require("./comments/comment_routes");

// Port Number
const PORT = 3000;

// CORS Middleware //
app.use(cors());

// https://expressjs.com/en/advanced/best-practice-performance.html
// app.use(compression());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json({ limit: 5 * 1024 * 2014 }));

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
  console.log("gettingg");
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Connect to databse, then start Server
db.connect().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
  });
});

module.exports = app;
