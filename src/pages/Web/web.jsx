import React, { useState } from "react";
import Cards from "../../components/Cards/cards";
import Modal from "../../components/Modal/modal";
import AllProjects from "../../data/allprojects.json";

function Web() {
  const webProjects = AllProjects.projects.web;
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="web">
      <div className="card__container">
        {webProjects.map((project) => (
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
          projectData={webProjects.find((project) => project.id === selectedProject.id)}
          showButtons={true} 
        />
      )}
    </section>
  );
}

export default Web;
