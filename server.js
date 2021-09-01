const express = require("require");
const PORT = 4000;
const app = express();

app.get("/hello", (request, response) => {
  console.log(request, method);
  console.log("Hey I got a request to / Hallo");

  response.send("Hey, Hello, I got your request!");
});
