const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("i m a incoming request");
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end()
})

server.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})