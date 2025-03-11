const fs = require('fs');
const server = require('http').createServer();

server.on("request",(req,res)=>{
    const readable = fs.createReadStream("testFile.txt");
    readable.on("data",(chunk)=>{
        res.write(chunk)
    })
    readable.on("end",()=>{
        res.end();
    })
    readable.on("error",(err)=>{
        console.log(err);
        res.statusCode=500;
        res.end("file not found")
    })
})

server.listen(8000,()=>{
    console.log("server is listening on port 8000")
})