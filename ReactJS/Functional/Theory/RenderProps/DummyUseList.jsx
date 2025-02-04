import React from "react";

const DummyUseList = () => {
  return (
    <FetchData
      url="https://jsonplaceholder.typicode.com/users"
      render={({ data, loading }) => {
        loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
};
export default DummyUseList;
