import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../stores";
import { usersReducer } from "./Skeleton";
import Button from "./Button";
import Skeleton from "./Skeleton";

function UserList() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => {
    return state.users;
  });

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={5} />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const renderUsers = data.map((user) => {
    return <div key={user.id}>{user.name}</div>;
  });
  return (
    <div>
      <div>
        <h1>Users</h1>
        <Button onClick={handleUserAdd}>Add Users </Button>
      </div>
      {renderUsers}
    </div>
  );
}

export default UserList;
