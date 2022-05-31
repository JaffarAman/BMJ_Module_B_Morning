require("dotenv").config();

var cloudinary = require("cloudinary");

const cloudinaryConfig = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
  secure: true,
};
module.exports = cloudinaryConfig;
