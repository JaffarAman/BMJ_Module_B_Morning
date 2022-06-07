const express = require("express");
const loginController = require("../controller/loginController");
const signupController = require("../controller/signup");
const authMiddleWare = require("../middleware/authMiddleware");
const UserModel = require("../models/userSchema");
const router = express.Router();

router.post("/api/signup", signupController);
router.post("/api/login", loginController);
router.post("/api/product", authMiddleWare, (req, res) => {
  console.log("body", req.body);
  res.send("api hit");
});
router.get("/api/user", authMiddleWare, (req, res) => {
  console.log(req.body.decoded._id, "userID");
  const userId = req.body.decoded._id;

  UserModel.findById(userId, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

module.exports = router;
