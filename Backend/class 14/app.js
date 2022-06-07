const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
var cookieParser = require("cookie-parser");

const router = require("./routes/routes");
const PORT = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true}));
app.use(router);

const DBURI = process.env.DB_URI;

mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
