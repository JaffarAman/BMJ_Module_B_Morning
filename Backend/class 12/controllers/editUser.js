const UserModel = require("../models/userSchema");

const editUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  //   if (role !== "admin") {
  //     return res.send("UnAuth");
  //   }
  if (Object.keys(body).length < 1) {
    return res.json({ message: "Required field are missing" });
  }

  try {
    const users = await UserModel.findByIdAndUpdate(id, body, { new: true });
    res.send({ message: "user block" });
  } catch (error) {
    res.send({ message: "user not found" });
  }
};

module.exports = editUser;
