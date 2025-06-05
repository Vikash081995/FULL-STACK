/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserList from "./demos/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false },
  ]);

  const toggleUserActivity = (id) => {
    const updatedActivity = users.map((user) => {
      user.id === id ? { ...user, isActive: !user.isActive } : user;
    });
  };

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} toggleUserActivity={toggleUserActivity} />
      <UserDashboard user={{ name: "John Doe", tasks: [] }} />
    </div>
  );
};

export default App;
