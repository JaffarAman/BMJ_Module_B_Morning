const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const token = req.cookies.token;

  jwt.verify(token, "bmjmoduleb", function (err, decoded) {
    // console.log(decoded, "decoded");
    req.body.decoded = decoded;
    if (!err) {
      next();
    } else {
      res.json({ message: "UnAuth" });
      //   res.status(401).sendFile(path.join(__dirname, "./web/build/index.html"));
      // console.log("error");
    }
  });
};

module.exports = authMiddleWare;
