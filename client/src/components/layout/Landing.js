import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import "../../App.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <header className="landing">
        <div className=" container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h3 className="masthead-subheading font-weight-bold text-white mx-auto mt-2 mb-5">
              This is a fully fledged Covid site which will tell you the current news related to COVID19, updated data,tweeter feeds and will also tell you the current stock market 
            </h3>
            <Link to="/news" class="btn btn-primary js-scroll-trigger">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);

