import React, { useState } from "react";
import Cards from "../../components/Cards/cards";
import Modal from "../../components/Modal/modal";
import AllProjects from "../../data/allprojects.json";

function Videos() {
  const videosProjects = AllProjects.projects.videos;
  const [selectedProject, setSelectedProject] = useState(null); 

  const openModal = (project) => {
    setSelectedProject(project); 
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="videos">
      <div className="card__container">
        {videosProjects.map((project) => (
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
          projectData={videosProjects.find((project) => project.id === selectedProject.id)}
          showButtons={false} 
        />
      )}
    </section>
  );
}

export default Videos;
