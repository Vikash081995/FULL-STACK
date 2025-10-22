import {app} from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config({
    path:"./.env"
}); 



const PORT = process.env.PORT || 8000;

connectDB().then(()=>{
 app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
 });
}).catch((error)=>{
    console.log("Failed to start server due to database connection error", error);
});


     