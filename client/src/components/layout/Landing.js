import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              A free, responsive, one page Bootstrap theme created by Start
              Bootstrap.
            </h2>
            <Link to="/" className="btn btn-primary js-scroll-trigger">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Landing;
