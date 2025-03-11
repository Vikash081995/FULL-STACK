import React from "react";

function Tooltip() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      Hover over me {isVisible && <div>More Info...</div>}
    </div>
  );
}

export default Tooltip;
