import React, { useState } from "react";

function UseStateWithObjects() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <label>First Name</label>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <br />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
    </form>
  );
}

export default UseStateWithObjects;
