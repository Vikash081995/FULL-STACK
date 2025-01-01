import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClickHandler = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={item.id}
            className="ui styled accordion"
            onClick={() => onTitleClickHandler(index)}
          >
            <i className="dropdown icon">{item.title}</i>
            <div className="content active">{item.content}</div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
