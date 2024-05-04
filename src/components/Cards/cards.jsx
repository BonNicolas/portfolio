function Cards(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
    return (
      <article className="card card--projects card-content" onClick={handleClick}>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
      </article>
    );
}

export default Cards;
