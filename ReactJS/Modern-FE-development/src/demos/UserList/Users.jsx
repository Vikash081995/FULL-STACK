import React from "react";

function User({ id, name, email, isActive, toggleUserActivity }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email:{email}</p>
      <p>Status :{isActive ? "Active" : "Inactive<"}</p>
      <button
        className={`user-card-button ${isActive ? "active" : "inactive"}`}
        onClick={() => toggleUserActivity(id)}
      >
        {isActive ? "deactivate" : "activate"}
      </button>
    </div>
  );
}

export default User;
