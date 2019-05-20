import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import ItemsList from './components/ItemsList.js'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/" component={ItemsList} />
      </div>
    </Router>
  );
}

export default App;
