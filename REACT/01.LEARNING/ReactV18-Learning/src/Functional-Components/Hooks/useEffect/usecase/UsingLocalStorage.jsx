// Let’s look at an example. Say you have a user picker that lets you select a user from a drop-down menu. You want to store the selected user in the browser’s local storage so that the page remembers the selected user from visit to visit

import React, { useState, useEffect } from "react";

const UserPicker = () => {
  const [user, setUser] = useState('Sanjiv');

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", user);
  }, [user]);

  return (
    <select value={user} onChangee={(e) => setUser(e.target.value)}>
      <option value="1">John</option>
      <option value="2">Paul</option>
      <option value="3">George</option>
      <option value="4">Ringo</option>
    </select>
  );
};

export default UserPicker;
