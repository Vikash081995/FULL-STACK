const express = require("express");
const { loggerMiddleware } = require("./Bookstore/middlewares/logger");
const bookRouter = require("./Bookstore/routes/book.routes");
const app = express();

//middleware
app.use(express.json());
app.use(loggerMiddleware);
//routes
app.use('/books', bookRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
