import React from "react";
import styles from "./ShowTask.module.css";

const ShowTask = ({ tasks, setTasks }) => {
  const handleClear = () => {
    setTasks([]);
  };
  return (
    <section className={styles.showTask}>
      <div className={styles.head}>
        <div>
          <span className={styles.title}>Todo</span>
          <span className={styles.count}>{tasks.length}</span>
        </div>
        <button className={styles.clearAll} onClick={handleClear}>
          Clear all
        </button>
      </div>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <p>
                <span className={styles.name}>{task.name}</span>
                <span className={styles.time}>{task.time}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShowTask;
