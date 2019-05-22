import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import ItemsList from './components/ItemsList.js';
import LoginPage from './components/LoginPage.js';
import MainPage from './components/MainPage.js';
import Dashboard from './components/Dashboard.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/Market" component={ItemsList} />
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
