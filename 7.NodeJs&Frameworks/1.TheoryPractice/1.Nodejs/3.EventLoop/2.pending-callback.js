const net = require("net");
const fs = require("fs");
console.log("start");

//create a client
const clientFail = new net.Socket();
const clientSuccess = new net.Socket();

clientFail.connect(8080, "192.168.4.24", () => {
  console.log(
    `Connected to server ${clientFail.remoteAddress}:${clientFail.remotePort}`
  );
  clientFail.write("Hello from clientFail");
});

clientSuccess.connect(80, "127.0.0.1", () => {
  console.log(
    `Connected to server ${clientSuccess.remoteAddress}:${clientSuccess.remotePort}`
  );
  clientSuccess.write("Hello from clientSuccess");
});

clientFail.on("data", (data) => {
  console.log(`Received: ${data}`);
  clientFail.destroy(); // kill client after server's response
});
clientSuccess.on("data", (data) => {
  console.log(`Received: ${data}`);
  clientSuccess.destroy(); // kill client after server's response
});
