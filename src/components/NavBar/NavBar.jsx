import React from "react";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <nav className={classes.navbar}>
        <a href="#" className={classes.toggledBtn}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </a>
        <div className={classes.navBarLinks}>
          <ul className={classes.pages}>
            <li>
              <a href="/#">Homepage</a>
            </li>
            <li>
              <a href="/#">Series</a>
            </li>
            <li>
              <a href="/#">Movies</a>
            </li>
          </ul>
        </div>
        <img
          alt="NerdFlix Logo"
          src="../assets/nerdflix_logo.svg"
          className={classes.logo}
        />{" "}
        <div className={classes.likes}>
          <img alt="Likes" src="../assets/star_icon.svg" />
          <span>5</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
