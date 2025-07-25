// src/components/ProjectList.js
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div>{projectItems}</div>
    </div>
  );
}

export default ProjectList;
