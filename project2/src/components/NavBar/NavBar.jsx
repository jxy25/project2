import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/team-loadout">Team Loadout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
