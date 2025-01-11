import { useState } from "react";
import { SingleBook } from "../../../types/books";
import styles from "./BookShow.module.css";
import BookEdit from "../BookEdit/BookEdit";

type BookShowProps = {
  book: SingleBook;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
};

function BookShow({ book, onDelete, onEdit }: BookShowProps) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id: number, title: string) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  if (showEdit) {
    return <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className={styles.container}>
      <h2>{book.title}</h2>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
      <div className={styles.actions}>
        <button type="button" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
