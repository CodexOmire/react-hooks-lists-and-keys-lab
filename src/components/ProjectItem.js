// src/components/ProjectItem.js
import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techElements = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));

  return (
    <div className="project-item">
      <h2>{name}</h2>
      <p>{about}</p>
      <div className="technologies">{techElements}</div>
    </div>
  );
}

export default ProjectItem;
