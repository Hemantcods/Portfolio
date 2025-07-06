import { useState } from "react";

import "./App.css";
import NavBar from "./Componets/Navbar";
import SideBar from "./Componets/SideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";

function App() {
  return (
    <>
      <div
        className="h-screen w-screen bg-black overflow-hidden"
        
      >
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
