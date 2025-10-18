const express = require("express");

const app = express();

app.get('/users/:id',(req,res)=>{
    const id = req.params.id
})

app.get('/users/:id/:name',(req,res)=>{
    const id = req.params.id
    const name = req.params.name
})