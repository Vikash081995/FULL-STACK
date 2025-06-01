import React from "react";

function Columns() {
  const items = [
    {
      id: 1,
      title: "Title 1",
      desc: "This is item 1",
    },
    {
      id: 2,
      title: "Title 2",
      desc: "This is item 2",
    },
  ];
  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
    </>
  );
}

export default Columns;
