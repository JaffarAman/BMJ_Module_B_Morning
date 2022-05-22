const express = require("express");
const loginController = require("../controllers/loginController");
const {
  createTodo,
  getTodo,
  upateTodo,
  deleteTodo,
} = require("../controllers/post");
const signupController = require("../controllers/signup");
const router = express.Router();

router.post("/api/signup", signupController);
router.post("/api/login", loginController);
router.post("/api/todo", createTodo);
router.get("/api/todo", getTodo);
router.put("/api/todo/:id", upateTodo);
router.delete("/api/todo/:id", deleteTodo);

module.exports = router;
