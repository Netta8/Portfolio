import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

export default function MainContent() {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
