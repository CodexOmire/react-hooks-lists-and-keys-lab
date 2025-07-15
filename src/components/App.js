// src/components/App.js
import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";
import projects from "../data/projects"; // assuming your data file is here

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
