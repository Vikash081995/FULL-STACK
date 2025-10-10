const express = require("express");
const router = express.Router();
const controller = require("../controllers/book.controller");

//Routes
router.get("/books", controller.getAllBooks)
router.get("/books/:id", customMiddleware, controller.getBooksById)
router.post("/books", controller.createBook);

module.exports = router;