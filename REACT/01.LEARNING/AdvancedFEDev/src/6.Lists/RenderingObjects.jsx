const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const UserList = () => {
  return (
    <li>
      {users.map((user) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </li>
      ))}
    </li>
  );
};

export default UserList;