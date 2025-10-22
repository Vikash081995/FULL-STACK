const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Books routes
const booksRouter = require("./routes/books.routes");
app.use("/books", booksRouter);

app.get("/", (req, res) => res.send("Node-ORM API running"));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
