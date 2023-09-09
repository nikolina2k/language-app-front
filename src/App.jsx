import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Dialog from './components/Dialog';
import Word from './components/Word';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from "./components/Words/Categories.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/dialog" Component={Dialog} />
          <Route path="/create" Component={Create} />
          <Route path="/word" Component={CategoryList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
