import React, { useState } from "react";
import ProjectDialog from "../ProjectDialog";
import "./index.css";

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { projectId, imageURL, description, title, link, tools, technologies } =
    projectDetails;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <li className="project-item-container" onClick={handleOpenDialog}>
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div>
      </li>
      {isDialogOpen && (
        <ProjectDialog
          title={title}
          description={description}
          link={link}
          tools={tools}
          technologies={technologies}
          onClose={handleCloseDialog}
        />
      )}
    </>
  );
};

export default ProjectItem;
