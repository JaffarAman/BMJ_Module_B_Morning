const TodoModel = require("../models/todoSchema");

const createTodo = (req, res) => {
  const { username, subject, todo } = req.body;

  if (!username || !subject || !todo) {
    return res.json({ message: "Required field are missing" });
  }
  TodoModel.create(req.body, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
};

const getTodo = (req, res) => {
  TodoModel.find({}, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
};

const upateTodo = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  //   console.log(id);
  //   console.log(body);

  //   TodoModel.updateOne({ _id: id }, req.body, (err, data) => {
  //     if (err) {
  //       res.send("error", err);
  //     } else {
  //       res.send(data);
  //     }
  //   });
  TodoModel.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;

  console.log(id);

  TodoModel.deleteOne({ _id: id }, req.body, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
};

module.exports = {
  createTodo,
  getTodo,
  upateTodo,
  deleteTodo,
};
