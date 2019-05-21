import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import ItemsList from './components/ItemsList.js'
import LoginPage from './components/LoginPage.js'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/Market" component={ItemsList} />
      </div>
    </Router>
  );
}

export default App;
