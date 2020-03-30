import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

class Landing extends Component {
  render() {
    return (
      <header className="landing">
        <div className=" container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h3 className="masthead-subheading font-weight-bold text-white mx-auto mt-2 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis mollitia velit sequi corrupti nesciunt aut alias non,
              dicta voluptates. Recusandae repellendus incidunt totam saepe ad
              ab, numquam nisi quis.
            </h3>
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
