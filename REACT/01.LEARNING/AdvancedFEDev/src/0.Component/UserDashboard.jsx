import React, { useState } from "react";
import "./App.css"; // Import CSS for styling

function UserDashboard({ user }) {
  const [tasks, setTasks] = useState(user.tasks);

  const addTask = () => {
    const newTask = `Task ${tasks.length + 1}`;
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <main className="dashboard">
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <>
              <li key={index}> {task} </li>
              <button
                onClick={() => removeTask(index)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </>
          ))}
        </ul>
      ) : (
        <p>No tasks available. Add a task to get started!</p>
      )}
      <button onClick={addTask} className="add-task">
        Add Task
      </button>
    </main>
  );
}

export default UserDashboard;
