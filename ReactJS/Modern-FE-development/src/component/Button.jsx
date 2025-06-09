import React from "react";

// const Button = ({ label, onClick }) => {
//   return <button onClick={onClick}>{label}</button>
// };

// export default Button;

import styles from "./Button.module.css";

const Button = () => {
  return <button className={styles.button}>Click Me</button>;
};

export default Button;
  