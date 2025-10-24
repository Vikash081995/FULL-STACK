const http = require("http");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});

server.listen(8080, () => {
  console.log("listening on port 8080");
});
