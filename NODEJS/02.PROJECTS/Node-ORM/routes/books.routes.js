const express = require("express");
const router = express.Router();
const controller = require("../controllers/books.controllers");

// GET /books - list all books
router.get("/", controller.getAllBooks);

// GET /books/:id - get a single book
router.get("/:id", controller.getBookById);

// POST /books - create a new book
router.post("/", controller.createBook);

// PUT /books/:id - update a book
router.put("/:id", controller.updateBook);

// DELETE /books/:id - delete a book
router.delete("/:id", controller.deleteBook);

module.exports = router;
