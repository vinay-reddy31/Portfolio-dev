import React from "react";
import "./index.css";

const ProjectDialog = ({
  title,
  description,
  link,
  tools,
  technologies,
  onClose,
}) => {
  return (
    <div className="project-dialog-overlay">
      <div className="project-dialog">
        <button className="project-dialog-close" onClick={onClose}>
          X
        </button>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>Tools and Technologies</h3>
        <ul>
          {tools && tools.map((tool, index) => <li key={index}>{tool}</li>)}
          {technologies &&
            technologies.map((tech, index) => <li key={index}>{tech}</li>)}
        </ul>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="project-dialog-button">Live Demo</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDialog;
