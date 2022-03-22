const http = require("http");

const server = http.createServer(function (request, response) {
  const pathName = request.url;
  if (pathName === "/") {
    response.write("HOME PAGE");
    response.end();
  } else if (pathName === "/about") {
    response.write("ABOUT PAGE");
    response.end();
  } else if (pathName === "/form") {
    response.setHeader("Content-Type", "text/html");
    response.write(
      "<form action='/userdata'  method='POST'><input placeholder='enter your name' name='name1' /> <button>SUBMIT </button></form>"
    );
    response.end();
  } else if (pathName === "/userdata") {
    console.log("user data");
    response.write("data agaya");
    response.end();
  }
});

server.listen(5000, console.log("server is running on localhost:5000"));
