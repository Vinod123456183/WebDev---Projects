import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import G from './components/G';
import Login from './components/Login';
import Home from './components/Home';
import User from './components/User';

import '../src/Styles/About.css'
import '../src/Styles/Home.css'
import '../src/Styles/Login.css'
import '../src/Styles/User.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/G" element={<G />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
