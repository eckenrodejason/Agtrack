import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  <header>
    <NavLink to="/home" activeClassName="is-active" exact={true}>
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
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
