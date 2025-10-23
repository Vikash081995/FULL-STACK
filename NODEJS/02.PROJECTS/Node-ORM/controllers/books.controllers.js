const booksTable = require("../models/book.model");
const db = require("../db");
const { eq } = require("drizzle-orm");

// Controller functions for books
// Assumes a `books` table with columns: id (uuid), title, description, authorsId

exports.getAllBooks = async (req, res) => {
  try {
    const result = await db.select().from(booksTable);
    return res.json(result.rows);
  } catch (err) {
    console.error("getAllBooks error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const [book] = await db
      .select()
      .from(booksTable)
      .where((table) => eq(table.id, id))
      .limit(1);

    if (!book) return res.status(404).json({ error: "Book not found" });
    return res.json(result.rows[0]);
  } catch (err) {
    console.error("getBookById error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.createBook = async (req, res) => {
  const { title, description, authorId } = req.body;

  if (!title || !authorId)
    return res.status(400).json({ error: "title and authorsId are required" });

  try {
    const result = await db
      .insert(booksTable)
      .values({
        title,
        description,
        authorsId: authorId,
      })
      .returning({
        id: booksTable.id,
      });
    return res
      .status(201)
      .json({ message: "Book created", bookId: result[0].id });
  } catch (err) {
    console.error("createBook error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, description, authorId } = req.body;

  if (!title && !description && !authorId)
    return res
      .status(400)
      .json({ error: "At least one field to update is required" });

  try {
    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (authorId) updateData.authorsId = authorId;

    const result = await db
      .update(booksTable)
      .set(updateData)
      .where((table) => eq(table.id, id))
      .returning({
        id: booksTable.id,
      });

    if (result.length === 0)
      return res.status(404).json({ error: "Book not found" });

    return res.json({ message: "Book updated", bookId: result[0].id });
  } catch (err) {
    console.error("updateBook error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db
      .delete(booksTable)
      .where((table) => eq(table.id, id))
      .returning({
        id: booksTable.id,
      });

    if (result.length === 0)
      return res.status(404).json({ error: "Book not found" });

    return res.json({ message: "Book deleted", bookId: result[0].id });
  } catch (err) {
    console.error("deleteBook error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

