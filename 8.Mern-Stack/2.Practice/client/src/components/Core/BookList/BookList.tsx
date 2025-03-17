import styles from "./BookList.module.css";
import { SingleBook } from "../../../types/books";
import BookShow from "../BookShow/BookShow";

type BookListProps = {
  books: SingleBook[];
  onDelete: (id: number) => void;
  onEdit: (id: number,title:string) => void;
};

function BookList({ books, onDelete, onEdit }: BookListProps) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className={styles.container}>{renderBooks}</div>;
}

export default BookList;
