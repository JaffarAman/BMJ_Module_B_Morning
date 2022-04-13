const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const UserModel = require("./schema");
const PORT = process.env.PORT || 5000;
const app = express();

////connect db
const baseUri = `mongodb+srv://admin:admin@cluster0.x6h3v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(baseUri);
// mongoose.connection.on("connected", () => console.log("mongoDB is connected"));
// mongoose.connection.on("error", (err) => console.log("error", err));

//allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///signup Api///
app.post("/api/signup", (request, response) => {
  const body = request.body;
  const userObj = {
    first_name: body.firstName,
    last_name: body.lastName,
    gender: body.gender,
    role: body.role,
    email: body.email,
    password: body.password,
  };

  UserModel.create(userObj, (error, data) => {
    if (error) {
      response.send(error);
    } else {
      response.send("user successfully signup");
    }
  });
});

// login api

app.post("/api/login", (req, res) => {
  const body = req.body;
  const userObj = {
    email: body.email,
    password: body.password,
  };
  UserModel.findOne(userObj, (err, data) => {
    if (err) {
      res.send(err);
    } else if (data) {
      res.send(data);
    } else {
      res.send("invalid email & password");
    }
  });
});

//single user
app.get("/api/user/:id", (req, res) => {
  const { id } = req.params;

  UserModel.findOne({ _id: id }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

//all user
app.get("/api/user", (req, res) => {
  const { id } = req.params;

  UserModel.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
