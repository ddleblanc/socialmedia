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

// Port Number
const PORT = 3000;

// CORS Middleware //
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Routes
app.use("/api/v1/users", users);
app.use("/api/v1/auth", auth);
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
