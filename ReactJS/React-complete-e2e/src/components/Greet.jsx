/* eslint-disable react/prop-types */
const Greet = (props) => {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  );
};

export default Greet;
