function Softwares(props) {
  
  return (
    <article className={`card card--softwares softwares ${props.animationClass}`}>
      <h3>{props.title}</h3> 
      <div className="softwares__container"> 
      {props.skills.map((skill, index) => (
        <div className="softwares__icons" key={index}>
          <i className={skill.class}></i>
          <p>{skill.name}</p>
        </div>
      ))}
      </div>
    </article>
  );
}

export default Softwares;