import React, { useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Slideshow(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMedia = () => {
    setCurrentIndex((currentIndex - 1 + props.medias.length) % props.medias.length);
  };

  const nextMedia = () => {
    setCurrentIndex((currentIndex + 1) % props.medias.length);
  };

  const isImage = (path) => {
    return path.endsWith('.jpg') || path.endsWith('.png') || path.endsWith('.webp');
  };

  return (
    <div className="slideshow">
      {props.medias.length > 0 && (
        <div className="slideshow__container" key={props.medias[currentIndex]}>
          {props.medias.length > 1 && (
            <FontAwesomeIcon
              className="slideshow__icon slideshow__icon--left"
              onClick={prevMedia}
              icon={faChevronLeft}
              size="4x"
              alt="Previous"
            />
          )}

          {isImage(props.medias[currentIndex]) ? (
            <img
              className="slideshow__image"
              src={props.medias[currentIndex]}
              alt="project img"
            />
          ) : (
            <video
              className="slideshow__video"
              src={props.medias[currentIndex]}
              controls
            />
          )}

          {props.medias.length > 1 && (
            <FontAwesomeIcon
              className="slideshow__icon slideshow__icon--right"
              onClick={nextMedia}
              icon={faChevronRight}
              size="4x"
              alt="Next"
            />
          )}

          {props.medias.length > 1 && (
            <div className="slideshow__counter">
              {currentIndex + 1}/{props.medias.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
