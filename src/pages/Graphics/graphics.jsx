import React, { useState } from "react";
import Cards from "../../components/Cards/cards";
import Modal from "../../components/Modal/modal";
import AllProjects from "../../data/allprojects.json";

function Graphics() {
  const graphicsProjects = AllProjects.projects.graphics;
  const [selectedProject, setSelectedProject] = useState(null);
  
  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="graphics">
      <div className="card__container">
        {graphicsProjects.map((project) => (
          <Cards
            key={project.id}
            image={project.cover}
            title={project.title}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={closeModal}
          projectData={graphicsProjects.find((project) => project.id === selectedProject.id)}
          showButtons={false} 
        />
      )}
    </section>
  );
}

export default Graphics;
