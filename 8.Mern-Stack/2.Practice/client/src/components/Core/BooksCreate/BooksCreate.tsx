import React, { useState } from "react";
import styles from "./BooksCreate.module.css";

type BooksCreateProps = {
  onCreate: (title: string) => void;
};

function BooksCreate({ onCreate }: BooksCreateProps) {
  const [title, setTitle] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(title);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          title="Book Title"
          placeholder="Enter book title"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default BooksCreate;
