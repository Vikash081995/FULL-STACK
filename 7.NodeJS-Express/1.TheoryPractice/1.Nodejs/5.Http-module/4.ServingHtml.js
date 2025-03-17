const http=require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

res.writeHead(200,{'Content-Type':"text/html"})
// const html = fs.readFileSync("./index.html","utf-8")
fs.createReadStream(__dirname+ "./index.html").pipe(res)   
// res.end(html)
})

server.listen(8080,()=>{
    console.log("listening on port 8080");
})