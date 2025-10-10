const { BOOKS } = require("../models/book");

exports.getBooksById = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = BOOKS.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.json(book);
};

exports.getAllBooks=(req, res) => {
  res.json(BOOKS);
}

exports.createBook = (req, res) => {
  const { title } = req.body;

  if (!title || !author) {
    return res.status(400).send("Title and Author are required");
  }

  const book = {
    id: BOOKS.length + 1,
    title,
  };

  BOOKS.push(book);
  res.status(201).json(book);
};