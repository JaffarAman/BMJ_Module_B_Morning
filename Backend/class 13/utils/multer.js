const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    // console.log("image new", file);
    cb(null, `${new Date().getTime()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
