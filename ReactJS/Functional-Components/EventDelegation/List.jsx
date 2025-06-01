const List = () => {
  const handleClick = (e) => {
    if (e.target.tagName === "LI") {
      console.log(e.target.dataset.id);
    }
  };

  return (
    <ul onClick={handleClick}>
      {items.map((item) => (
        <li key={item.id} data-id={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
