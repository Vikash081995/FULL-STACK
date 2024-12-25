const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end("this is home page");
  } else if (pathName === "/about") {
    res.end("this is about page");
  }else{
    res.end("this is not found page")
  }
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
