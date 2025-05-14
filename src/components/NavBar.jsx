import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/FerryPage">Ferry Page</NavLink>
        </li>
        <li>
          <NavLink to="/GetRequestApp">Get Request App</NavLink>
        </li>
        <li>
          <NavLink to="/PostsRequestApp">Posts Request App</NavLink>
        </li>
        <li>
          <NavLink to="/JokePage">Joke Page</NavLink>
        </li>
        <li>
          <NavLink to="/PhotoApp">Photo App</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;