const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Homepage");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to about");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 not found");
  }
});

server.listen(8080, () => {
  console.log("listening on port 8080");
});
