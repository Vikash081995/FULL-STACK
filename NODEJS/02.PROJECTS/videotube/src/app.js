import express from "express";
const app = express();
import cors from "cors";


app.use(cors({
    origin:process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials:true
}))

app.use(express.json({
    limit:"50mb"
}));

app.use(express.urlencoded({
    limit:"50mb",
    extended:true
}))

app.use(express.static("public"));

export {app}