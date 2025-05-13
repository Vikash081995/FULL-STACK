import React, { useEffect } from "react";

const UpdatingDocumentTitle = () => {
  const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = greetings[index];
  });

  const updateGreeting = () => {
    setIndex(Math.floor(Math.random() * 3));
  };
  
  return (
    <div>
      <button onCick={updateGreeting}> Click</button>
    </div>
  );
};

export default UpdatingDocumentTitle;
