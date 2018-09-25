import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Project from './Components/Projects/Projects';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="index">
          <Route
          exact
            path="/"
            component={Home}
          />
          <Route
          exact
          path="/projects"
          component={Project}
          />
          <Route
          exact
          path="/about"
          component={About}
        />
        <Route
        exact
        path="/blog"
        component={Blog}
        />
        <Route
        exact
        path="/contact"
        component={Contact}
        />

      </div>
      </Router>

    );
  }
}

export default App;
