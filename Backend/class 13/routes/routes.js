const express = require("express");
const editUser = require("../controllers/editUser");
const getUser = require("../controllers/getUser");
const imageUpload = require("../controllers/imageUpload");
const loginController = require("../controllers/loginController");
const {
  createTodo,
  getTodo,
  upateTodo,
  deleteTodo,
} = require("../controllers/post");
const signupController = require("../controllers/signup");
const upload = require("../utils/multer");
const router = express.Router();

router.post("/api/signup", signupController);
router.post("/api/login", loginController);
router.post("/api/todo", createTodo);
router.get("/api/todo", getTodo);
router.put("/api/todo/:id", upateTodo);
router.delete("/api/todo/:id", deleteTodo);
router.get("/api/getuser/:role", getUser);
router.put("/api/edituser/:id", editUser);
router.post("/api/imageupload", upload.any("image") , imageUpload);

module.exports = router;
