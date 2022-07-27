import React from "react";

// Stateless Functional component

const Navbar = ({ totalCounters }) => {
  console.log("Navbar -Rendered");

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" href="#">
          Navbar
          <span className="badge badge-pill bg-secondary m-3">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
