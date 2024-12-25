const EventhandlingExample = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button type="button" onClick={handleClick}>
      Click{" "}
    </button>
  );
};

export default EventhandlingExample;
