import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="logo" />
        <span>Taskmate</span>
      </div>
      <div className={styles.themeSelector}>
        <span className={styles.light}></span>
        <span className={styles.dark}></span>
        <span className={styles.system}></span>
      </div>
    </header>
  );
};

export default Header;
