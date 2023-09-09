// src/App.js

import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Dialog from './components/Dialog';
import Word from './components/Word';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/dialog" Component={Dialog} />
          <Route path="/word" Component={Word} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
