const fs = require("fs");

setTimeout(()=>{
    console.log("Hello World");
},0)

setImmediate(()=>{
    console.log("Hello World");
})  

fs.readFile("text-file.txt",()=>{
    console.log('I/o finished')
})

console.log('Hello from top level code');