const multer = require("multer");
const path = require("path");
const env = require("./env");

// Set Storage Engine
const storage = multer.diskStorage({
  // destination: "./angular-src/src/assets", // Development
  destination: './public/assets', // Production
  // destination: env.uploadDestination,
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const imageFilter = function (req, file, cb) {
  // accept image only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

// Init Upload
const upload = multer({
  storage: storage,
  fileFilter: imageFilter
}).single("photo");

module.exports = {
  upload: upload
};
