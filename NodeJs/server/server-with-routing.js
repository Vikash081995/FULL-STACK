const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end("this is home page");
  } else if (pathName === "/about") {
    res.end("this is about page");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/../data/dummy.json`, "utf-8", (err, data) => {
      const productData=JSON.parse(data);
      console.log(productData);
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(data);
    });   
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("this is not found page");
  }
});

server.listen(8000, () => {
  console.log("server is listening on port 3000");
});
