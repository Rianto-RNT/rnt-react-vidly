import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav classname="navbar navbar-expand-lg navbar-light bg-light">
        <Link classname="navbar-brand" to="/">
          RNT-Vidly
        </Link>
        <button
          classname="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classname="navbar-toggler-icon"></span>
        </button>
        <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div classname="navbar-nav">
            <NavLink classname="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink classname="nav-item nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink classname="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
