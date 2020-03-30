import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Start Bootstrap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active  mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item active mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/"
                >
                  About
                </Link>
              </li>
              <li className="nav-item active mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/news"
                >
                  News
                </Link>
              </li>
              <li className="nav-item active mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/data"
                >
                  Data
                </Link>
              </li>
              <li className="nav-item active mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/feeds"
                >
                  Feeds
                </Link>
              </li>
              <li className="nav-item active mx-0 mx-lg-1">
                <Link
                  className="shadow-sm nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/login"
                >
                  Log In
                </Link>
              </li>
              <li className="nav-item active justify">
                <Link
                  className="shadow-sm nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/register"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
