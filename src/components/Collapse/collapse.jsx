import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <div className="collapse__container">
      <div className="collapse__bloc">
        <h2 className="collapse__title">{props.title}</h2>
        <FontAwesomeIcon
          className={`collapse__icon ${isOpen ? 'open' : ''}`}
          onClick={toggleCollapse}
          icon={faChevronUp}
          size="xl"
        />
      </div>
      <div className={`collapse__render-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse__content">{props.content}</div>
      </div>
    </div>
  )
}

export default Collapse
