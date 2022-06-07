const bcryptjs = require("bcryptjs");
const UserModel = require("../models/userSchema");

const signupController = async (req, res) => {
  const { username, email, password, contact } = req.body;

  if (!username || !email || !password || !contact) {
    return res.json({ message: "Required field are missing" });
  }

  const hashPass = await bcryptjs.hash(password, 10);

  const userObj = {
    ...req.body,
    password: hashPass,
  };

  UserModel.findOne({ email }, (error, user) => {
    if (error) {
      res.send(error);
    } else if (user) {
      console.log(user);
      res.json({ message: "email address is already exist" });
    } else {
      UserModel.create(userObj, (err, _) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "user successfully signup" });
        }
      });
    }
  });
};

module.exports = signupController;
