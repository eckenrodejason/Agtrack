import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    {/*Shows FieldList*/}
    <NavLink to="/field-list" activeClassName="is-active">
      Fields
    </NavLink>
    {/*Shows JobList*/}
    <NavLink to="/job-list" activeClassName="is-active">
      Jobs
    </NavLink>
    
  </header>
);

export default Header;
