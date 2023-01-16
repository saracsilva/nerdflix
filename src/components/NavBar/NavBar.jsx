import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <div>
          <ul>
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
        <img alt="NerdFlix Logo" src="../assets/nerdflix_logo.svg" />{" "}
        <div>
          <img alt="NerdFlix Logo" src="../assets/star_icon.svg" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
