import React from "react";
import { Link, useLocation } from "react-router-dom"; // eslint-disable-line

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="/">
          Godwin Otokina
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link js-scroll ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link js-scroll ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link js-scroll ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
