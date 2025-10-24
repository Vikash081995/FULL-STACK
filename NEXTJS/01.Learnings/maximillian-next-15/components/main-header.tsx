import Link from "next/link";
import classes from "./main-header.module.css";
// import Image from "next/image";
// import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      {/* <MainHeaderBackground /> */}
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <img className={classes.img} src={"https://images.unsplash.com/photo-1547494784-d143dea885b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"}  alt="a plate with food on it" />
          Next level food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meal</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
