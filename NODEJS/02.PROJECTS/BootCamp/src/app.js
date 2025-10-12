import express from "express";
const app = express();
import cors from "cors";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//cors cofigurations
// app.use(cors({
//   origin: process.env.CORS_ORIGIN.split(" , ") || "*",
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }))

//import the routes 
import healthCheckRouter from "./routes/healthchecks.routes.js"

app.use("/api/v1/healthCheck",healthCheckRouter)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/instagram",(req,res)=>{
    res.send("Welcome to Instagram");
})


export default app;