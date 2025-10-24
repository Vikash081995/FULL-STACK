import React, { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import styles from "./App.module.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "TaskA", time: "2:09:01 Am - 01/01/2023" },
    { id: 2, name: "TaskB", time: "3:10:01 Am - 02/01/2023" },
    { id: 3, name: "TaskC", time: "4:11:01 Am - 03/01/2023" },
    { id: 4, name: "TaskD", time: "5:12:01 Am - 04/01/2023" },
  ]);
  return (
    <div className={styles.app}>
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ShowTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
