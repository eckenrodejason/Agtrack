import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/fields" activeClassName="is-active">
      Fields
    </NavLink>
    <NavLink to="/jobs" activeClassName="is-active">
      Jobs
    </NavLink>
  </header>
);

export default Header;
