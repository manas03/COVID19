import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <header className="landing">
        <div className=" container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h2 className="font-italic masthead-subheading font-weight-light text-white-50 mx-auto mt-2 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis mollitia velit sequi corrupti nesciunt aut alias non,
              dicta voluptates. Recusandae repellendus incidunt totam saepe ad
              ab, numquam nisi quis.
            </h2>
            <Link to="#about" class="btn btn-primary js-scroll-trigger">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Landing;
