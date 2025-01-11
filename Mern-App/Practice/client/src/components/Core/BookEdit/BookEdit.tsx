import { useState } from "react";
import { SingleBook } from "../../../types/books";

type BookEditProps = {
  book: SingleBook;
  onSubmit: (id: number, title: string) => void;
};

function BookEdit({ book, onSubmit }: BookEditProps) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        title="Book Title"
        value={title}
        placeholder="Enter book title"
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default BookEdit;
