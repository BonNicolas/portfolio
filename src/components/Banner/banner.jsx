function Banner(props) {
  return (
    <div className="banner-container">
      <img className="banner-container__image" src={props.image} alt="Banner" />
      <div className="banner-container__hover">{props.title}</div>
    </div>
  )
}

export default Banner
