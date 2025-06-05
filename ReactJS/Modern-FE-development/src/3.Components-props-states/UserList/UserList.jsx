import User from "./Users";

function UserList({ users,toggleUserActivity }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          isActive={user.isActive}
          toggleUserActivity={toggleUserActivity}
        />
      ))}
    </div>
  );
}
