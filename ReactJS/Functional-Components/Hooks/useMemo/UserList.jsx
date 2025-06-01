import React, { useMemo } from "react";

function UserList({ users, onSelectUser }) {
  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }, [users]);

  const memoizedSelectHandler = useCallback(
    (user) => {
      onSelectUser(user);
    },
    [onSelectUser]
  );

  const UserItem = memo(({ user, onSelectUser }) => {
    return <li onClick={() => onSelectUser(user)}>{user.name}</li>;
  });

  return (
    <ul>
      {sortedUsers.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onSelectUser={memoizedSelectHandler}
        />
      ))}
    </ul>
  );
}


export default UserList;
