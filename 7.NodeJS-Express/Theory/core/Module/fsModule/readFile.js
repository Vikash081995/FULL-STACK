const fs = require("fs");

const file1 = fs.readFile("./txt/readTxt.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("file1", file1);
