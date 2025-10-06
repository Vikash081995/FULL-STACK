import User from "./User";

function UserList({
  users,
  toggleUserActivity,
}: {
  users: {
    id: string | number;
    name: string;
    email: string;
    isActive: boolean;
  }[];
  toggleUserActivity: (id: string | number) => void;
}) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          isActive={user.isActive}
          toggleActivity={toggleUserActivity}
        />
      ))}
    </div>
  );
}

export default UserList;
