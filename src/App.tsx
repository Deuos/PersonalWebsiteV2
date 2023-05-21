import React from 'react';
import './App.css';
import { Route, Routes, } from "react-router-dom";

//sidebar
import Sidebar from './components/sidebar/Sidebar';
//Routes
import Home from './components/home/Home';
import AboutMe from './components/aboutme/AboutMe';
import ContactMe from './components/contactme/ContactMe';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App;
