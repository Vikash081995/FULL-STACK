import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Books.module.css";
import BooksCreate from "../../components/Core/BooksCreate/BooksCreate";
import { SingleBook } from "../../types/books";
import BookList from "../../components/Core/BookList/BookList";

function Books() {
  const [books, setBooks] = useState<SingleBook[]>([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title: string) => {
    const response = await axios.post("http://localhost:5000/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBook = async (id: number) => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:5000/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className={styles.container}>
      <BooksCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBookById} />
    </div>
  );
}

export default Books;
