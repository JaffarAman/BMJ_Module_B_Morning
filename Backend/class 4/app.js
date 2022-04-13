const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const userModel = require("./schema");

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect db
const baseUri = `mongodb+srv://admin:admin@cluster0.x6h3v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(baseUri);
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));

//middleware
app.use((req, res, next) => {
  console.log("hittttttt");
  const user = true;
  if (user) {
    next();
  } else {
    res.send("invalid");
  }
});

app.get("/api/user", (req, res) => {
  userModel.find({ _id: "6246937ff2b84079720dc71a" }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.post("/api/user", (req, res) => {
  //   const userData = req.body;
  const userObj = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
  };
  userModel.create(userObj, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.put("/api/user", (req, res) => {
  res.send("user  put");
});

app.delete("/api/user", (req, res) => {
  res.send("user  delete");
});

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));
