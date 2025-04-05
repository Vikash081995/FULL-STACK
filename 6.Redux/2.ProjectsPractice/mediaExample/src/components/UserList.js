import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../stores";
import { usersReducer } from "./Skeleton";
import Skeleton from "./Skeleton";

function UserList() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => {
    return state.users;
  });

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
  return <div>{renderUsers}</div>;
}

export default UserList;
