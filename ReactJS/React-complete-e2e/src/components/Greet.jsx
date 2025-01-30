/* eslint-disable react/prop-types */
const Greet = ({ name, heroName, children }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{heroName}</div>
      <div>{children}</div>
    </div>
  );
};

export default Greet;
