import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/PrivateRoute";

import Footer from "./components/layout/Footer";
import News from "./components/news";
import Data from "./components/data";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Feeds from "./components/feeds";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import FAQ from "./components/faq";
import About from "./components/About";
import Stock from "./Stock";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Landing} />
              <Route exact path="/news" component={News} />
              <Route exact path="/data" component={Data} />
              <Route exact path="/feeds" component={Feeds} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/information" component={FAQ} />
              <Route exact path="/about" component={About} />
              <Switch>
                <PrivateRoute exact path="/stock" component={Stock} />
              </Switch>

              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
