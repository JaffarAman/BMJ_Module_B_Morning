// const http = require("http");
// const PORT = 8000;

// const server = http.createServer(function (request, response) {
//   const pathName = request.url;
//   if (pathName === "/") {
//     response.write("HELLO HOME PAGE");
//     response.end();
//   } else if (pathName === "/about") {
//     response.write("ABOUT PAGE");
//     response.end();
//   } else if (pathName === "/form") {
//     response.setHeader("Content-Type", "text/html");
//     response.write(`
//       <form method="POST" action="/userdata">
//         <input placeholder="enter your name" name="username" />
//         <button>LOGIN</button>
//       </form>`);
//     response.end();
//   } else if (pathName === "/userdata") {
//     // response.write("user data ");
//     let data = "";
//     request.on("data", (chunk) => {
//       console.log("hello");
//       data += chunk;
//     });
//     request.on("end", () => {
//       console.log(data, "data");
//     });
//     response.write("data receieved");
//     response.end();
//   } else {
//     response.write("404 page not found");
//     response.end();
//   }
// });

// server.listen(PORT, console.log("Server is running on localhost:8000"));
