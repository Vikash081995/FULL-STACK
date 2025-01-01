import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClickHandler = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";
        return (
          <div
            key={item.id}
            className="ui styled accordion"
            onClick={() => onTitleClickHandler(index)}
          >
            <div className={`title ${active}`}>
              <i className="dropdown icon">{item.title}</i>
            </div>
            <div className={`content ${active}`}>{item.content}</div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
