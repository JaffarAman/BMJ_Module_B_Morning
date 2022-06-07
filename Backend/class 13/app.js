const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const router = require("./routes/routes");
const cloudinaryConfig = require("./config/cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config(cloudinaryConfig);

const app = express();
const PORT = process.env.PORT || 5000;

//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const DBURI = process.env.DB_URI;

app.use("/", express.static(path.join(__dirname, "./view/crudproject/build")));

mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));

///all routes
app.use(router);

app.get("/**", (req, res) => {
  res.redirect("/");
});
app.get("/**", (req, res) => {
    res.render();
  });
app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
