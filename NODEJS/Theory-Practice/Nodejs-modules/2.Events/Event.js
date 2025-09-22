const EventEmitter = require("events");
const http = require("http");

//=======CUSTOM EVENT EMITTER =========
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});
myEmitter.on("newSale", () => {
  console.log("customer sale Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are now ${stock} items in stock`);
});

myEmitter.emit("newSale", 9);

//==========================================

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received");
});

server.on("close", (req, res) => {
  console.log("server is closed");
});

server.listen(8000, () => {
  console.log("server is listening on port 8000");
});
