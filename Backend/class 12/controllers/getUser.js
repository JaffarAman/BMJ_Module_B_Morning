const UserModel = require("../models/userSchema");

const getUser = async (req, res) => {
  const role = req.params.role;
  console.log(role);
  if (role !== "admin") {
    return res.send("UnAuth");
  }
  try {
    const users = await UserModel.find({ role: "user" });
    res.send(users);
  } catch (error) {
    res.send("user not found");
  }
};

module.exports = getUser;
