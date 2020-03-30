import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              A free, responsive, one page Bootstrap theme created by Start
              Bootstrap.
            </h2>
            <Link to="/" class="btn btn-primary js-scroll-trigger">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Landing;
