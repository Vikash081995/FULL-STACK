const express = require('express');
const app = express();
const analyzeRoute = require('./routes/analyze');

const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.json());

//https://api.openai.com/v1/chat/completions

//Routes

app.use("/api/analyze", analyzeRoute);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});