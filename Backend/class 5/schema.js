const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  gender: { type: String },
  role: { type: String },
  email: { type: String },
  password: { type: String },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
