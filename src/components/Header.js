import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header-content">
        <Link className="header-title" to="/home">
          <h1>Agtrack</h1>
        </Link>
        {/*Shows FieldList*/}
        <NavLink
          className="header-link"
          to="/field-list"
          activeClassName="is-active"
        >
          Fields
        </NavLink>
        {/*Shows JobList*/}
        <NavLink
          className="header-link"
          to="/job-list"
          activeClassName="is-active"
        >
          Jobs
        </NavLink>
        <button className="button button-link" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
