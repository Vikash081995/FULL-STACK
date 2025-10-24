function DynamicButton() {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <button
      style={{
        backgroundColor: isClicked ? "green" : "red",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked ? "Clicked" : "Click Me"}
    </button>
  );
}
