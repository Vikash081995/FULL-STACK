import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
  const [index, setIndexx] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  const handleNextClick = () => {
    if (hasNext) {
      setIndexx(index + 1);
    } else {
      setIndexx(0);
    }
  };

  const handlePreviousClick = () => {
    if (index > 0) {
      setIndexx(index - 1);
    } else {
      setIndexx(sculptureList.length - 1);
    }
  };

  function handleShowMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
      </h2>
      <button onClick={handleShowMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
      {sculpture.museum && (
        <p>
          By {sculpture.artist}, {sculpture.museum}
        </p>
      )}

      <button onClick={handlePreviousClick}>Previous</button>
    </>
  );
}
