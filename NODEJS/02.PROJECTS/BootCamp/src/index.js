import dotenv from 'dotenv' 
import app from './app.js';
import connectDB from './db/connect.js';

dotenv.config({
    path:"./.env"
});

const PORT = process.env.PORT || 3000;


connectDB().then(
    app.listen(PORT,()=>{
        console.log(`Localhost is running at PoRT ${PORT}`)
    })
).catch(err=>console.log("Mongodb connection error"))