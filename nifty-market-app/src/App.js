import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './components/NavBar.js';
import ItemsList from './components/ItemsList.js';
import ItemPage from './components/ItemPage.js';
import LoginPage from './components/LoginPage.js';
import MainPage from './components/MainPage.js';
import Dashboard from './components/Dashboard.js';
import PrivateRoute from './PrivateRoute.js';

import { getData, getUserData } from './actions/'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getData();
    if (localStorage.getItem('token')) {
      this.props.getUserData()
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Market" component={ItemsList} />
          <Route exact path="/Market/:id" component={ItemPage} />
          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { getData, getUserData })(App);
