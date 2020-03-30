import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/footer'
import News from './components/news'
import Data from './components/data'
import Navbar from "./components/layout/Navbar";
import Landing from './components/layout/Landing'
import Feeds from './components/feeds'


class App extends Component {
  

  render() {
    return (
      <Router>
      <div>
      <div className="App">
         <Navbar/>
         <Route exact path='/' component={Landing}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/data' component={Data}/>
        <Route exact path='/feeds' component={Feeds}/>
      

        <Footer/>
      </div>
      </div>
      </Router>
      
    );
  }
}
export default App;
