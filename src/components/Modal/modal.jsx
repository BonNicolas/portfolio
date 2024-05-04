import { Link } from "react-router-dom";
import Slideshow from "../Slideshow/slideshow";
import Tag from "../Tag/tag";

function Modal({projectData, onClose, showButtons}) {

  const tags = projectData.tags.map((tag, index) => (
    <Tag key={index} title={tag} />
  ));

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal__container">
        {projectData && projectData.medias && (
          <Slideshow medias={projectData.medias} />
        )}
        <h2 className="modal__title">{projectData.title}</h2>
        <div className="modal__informations">{projectData.description}</div>
        <div className="modal__tags">
          <div className="tag__container">{tags}</div>
        </div>
        {showButtons && ( 
          <div>
            {projectData.githubpage && (
              <Link to={projectData.githubpage} target="_blank">
                <button className="button button--projects button--margin-r">VISITER</button>
              </Link>
            )}
            {projectData.github && (
              <Link to={projectData.github} target="_blank">
                <button className="button button--projects">GITHUB</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
