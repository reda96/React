import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
// Stateless Functional Component sfc
const NavBar = props => {
  // setTimeout(() => {
  //   props.history.push("/");
  // }, 2000);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <h1 className="navbar-brand text-white">Poke'Times</h1>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>{" "}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>{" "}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">
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
