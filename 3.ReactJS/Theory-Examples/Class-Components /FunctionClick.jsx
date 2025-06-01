const FunctionClick = () => {
  const handleClick = () => {
    console.log("Button is clicked ");
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default FunctionClick;
