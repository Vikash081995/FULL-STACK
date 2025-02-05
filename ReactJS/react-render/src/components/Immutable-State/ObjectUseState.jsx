import { useState } from "react";

const initialState = {
  fname: "Bruce",
  lname: "Wayne",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const changeName = () => {
    const newPerson = { ...person };
    newPerson.fname = "Clark";
    newPerson.lname = "Kent";
    setPerson(person);
  };

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
