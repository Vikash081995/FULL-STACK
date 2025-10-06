import { useState } from "react";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false },
  ]);
  const toggleUserActivity = (id: number | string) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };
  return <UserList users={users} toggleUserActivity={toggleUserActivity} />;
};
export default App;
