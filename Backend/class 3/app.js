const express = require("express");
const app = express();
const PORT = 5000;

///body allow///
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", (req, res, next) => {
//   const user = false;
//   if (user) {
//     next();
//   } else {
//     res.send("UnAuth");
//   }
// });

// app.get("/about", (req, res) => {
//   res.send("ABOUT PAGE");
// });

// params
// app.get("/api/user/:id", (req, res) => {
//   const username = req.params;
//   console.log(username);
//   res.send("HOME PAGE");
// });

// query selector
app.get("/api/getuser", (req, res) => {
  console.log(req.query``);
  res.send("Query selector");
});

app.post("/api/user", (req, res) => {
  console.log(req);
  res.send(req.body);
});

// app.put("/api/updateuser", (req, res) => {

// });

app.delete("/api/deleteuser", (req, res) => {
  console.log(req);
  res.send(req.body);
});

app.listen(PORT, console.log(`Server running on localhost:${PORT}`));
