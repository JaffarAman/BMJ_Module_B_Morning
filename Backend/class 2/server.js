const express = require("express");
const app = express();
const PORT = 8000;

// app.get(endpoint , callback)//
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/about", (req, res) => {
  res.send("ABOUT PAGE");
});

app.post("/formdata", (req, res) => {
  res.send("form data");
});

app.get("*", (req, res) => {
  res.send("404 page not found");
});

app.listen(PORT, console.log(`server is running on localhost:${PORT}`));
