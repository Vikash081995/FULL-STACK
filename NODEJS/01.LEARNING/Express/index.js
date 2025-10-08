const express = require("express");

const app = express();

const books = [
  { id: 1, name: "Book One" },
  { id: 2, name: "Book Two" },
  { id: 3, name: "Book Three" },
  { id: 4, name: "Book Four" },
  { id: 5, name: "Book Five" },
];

//middleware
app.use(express.json());

//Routes
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.json(book);
});

app.post("/books", (req, res) => {
  const { title } = req.body;

  if (!title || !author) {
    return res.status(400).send("Title and Author are required");
  }

  const book = {
    id: books.length + 1,
    title,
  };

  books.push(book);
  res.status(201).json(book);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
