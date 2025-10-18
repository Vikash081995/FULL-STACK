const express = require("express");

const app = express();

app.get('/users/:id/:name?',(req,res)=>{
    const id =parseInt(req.params.id)
    if(id){
        res.send(`user id is ${id}`)
    }
})