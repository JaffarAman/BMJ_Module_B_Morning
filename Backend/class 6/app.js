const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserModel = require("./schema");

const app = express();
const PORT = process.env.PORT || 5000;

//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DBURI = `mongodb+srv://admin:admin1122334455@cluster0.cnh9w.mongodb.net/crudproject?retryWrites=true&w=majority`;

mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));

app.get("/api", (request, response) => {
  response.send("api hit");
});

app.post("/api/signup", async (req, res) => {
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
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: "Required field are missing" });
  }

  UserModel.findOne({ email }, async (error, user) => {
    if (error) {
      res.send(error);
    } else if (user) {
    //   console.log(user.password);
      await bcryptjs
        .compare(password, user.password)
        .then((password) => {
          if (password) {
            res.send({ message: "user successfully login" });
          } else {
            res.send({ message: "Invalid User" });
          }
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.json({ message: "Invalid User" });
    }
  });
});

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
