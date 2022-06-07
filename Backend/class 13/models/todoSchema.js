const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  subject: {
    type: String,
  },
  todo: {
    type: String,
  },
  image: {
    type: String,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = TodoModel;
