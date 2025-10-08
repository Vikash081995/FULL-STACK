import { useState } from "react";

const UserDashboard = ({ user }) => {
  const [tasks, setTasks] = useState(user.tasks || []);

  const addTask = () => {
    setTasks([...tasks, `New Task ${tasks.length + 1}`]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <header>
        <h1>Welcome,{user.name}</h1>
        <p>Email:{user.email}</p>
      </header>
      <main>
        <h2>Your tasks:</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <>
                <li key={index}>{task}</li>
                <button onClick={() => removeTask(index)}>Remove</button>
              </>
            ))}
          </ul>
        ) : (
          <p>No tasks available</p>
        )}
        <button onClick={addTask}>Add Task</button>
      </main>
    </div>
  );
};
