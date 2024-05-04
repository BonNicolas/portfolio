import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Experience(props) {

  return (
    <article className={`card experience ${props.animationClass}`}>
      <FontAwesomeIcon icon={props.icon} size='xl' />
      <h3>{props.title}</h3>  
      <p>{props.first}</p>
      <p>{props.two}</p>
    </article>
  );
}

export default Experience;
