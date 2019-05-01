import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
// Stateless Functional Component sfc
const NavBar = props => {
  // setTimeout(() => {
  //   props.history.push("/");
  // }, 2000);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">NavBar</h1>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>{" "}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>{" "}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(NavBar);
