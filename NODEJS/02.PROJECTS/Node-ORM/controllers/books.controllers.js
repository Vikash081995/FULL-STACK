const booksTable = require("../models/book.model");
const db = require("../db");

// Controller functions for books
// Assumes a `books` table with columns: id (uuid), title, description, authorsId

exports.getAllBooks = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT id, title, description, "authorsId" FROM books'
    );
    return res.json(result.rows);
  } catch (err) {
    console.error("getAllBooks error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      'SELECT id, title, description, "authorsId" FROM books WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Book not found" });
    return res.json(result.rows[0]);
  } catch (err) {
    console.error("getBookById error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.createBook = async (req, res) => {
  const { title, description, authorsId } = req.body;
  if (!title || !authorsId)
    return res.status(400).json({ error: "title and authorsId are required" });

  try {
    const result = await db.query(
      'INSERT INTO books(title, description, "authorsId") VALUES ($1, $2, $3) RETURNING id, title, description, "authorsId"',
      [title, description || null, authorsId]
    );
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("createBook error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, description, authorsId } = req.body;
  try {
    const existing = await db.query("SELECT id FROM books WHERE id = $1", [id]);
    if (existing.rows.length === 0)
      return res.status(404).json({ error: "Book not found" });

    const result = await db.query(
      'UPDATE books SET title = COALESCE($1, title), description = COALESCE($2, description), "authorsId" = COALESCE($3, "authorsId") WHERE id = $4 RETURNING id, title, description, "authorsId"',
      [title, description, authorsId, id]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    console.error("updateBook error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      "DELETE FROM books WHERE id = $1 RETURNING id",
      [id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Book not found" });
    return res.status(204).send();
  } catch (err) {
    console.error("deleteBook error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
