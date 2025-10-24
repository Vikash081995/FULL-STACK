import React, { useState } from "react";
import styles from "./AddTask.module.css";

const AddTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const AddNewTask = (e) => {
    setNewTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const myTask = {
        id: tasks.length + 1,
        name: newTask,
        time:
          new Date().toLocaleTimeString() +
          " - " +
          new Date().toLocaleDateString(),
      };
      setTasks([...tasks, myTask]);
      setNewTask("");
    }
  };

  return (
    <section className={styles.addTask}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={newTask}
          type="text"
          name="task"
          id="task"
          placeholder="Add your new task here..."
          onChange={AddNewTask}
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddTask;
