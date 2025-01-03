const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.get('/api/v1/instagram',(req,res)=>{
    res.send("Hello Instagram");
})

app.post('/api/v1/tours',(req,res)=>{
console.logf(req.body);
res.send("done")
})

app.get('api/v1/tours/:id',(req,res)=>{ 
    console.log(req.params);
    res.send("done")
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})