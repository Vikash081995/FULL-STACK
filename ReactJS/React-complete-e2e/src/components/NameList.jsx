function Namelist() {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div>
      {names.map((name, index) => {
        return <h2 key={index}>{name}</h2>;
      })}
    </div>
  );
}

export default Namelist;
