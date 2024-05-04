import { Link } from 'react-router-dom';
import AllCategories from '../../data/allcategories.json';
import Cards from '../Cards/cards';

function Gallery() {
  return (
    <section id='gallery' className="gallery">
      <h2>Projets</h2>
      <div className="card__container">
      {AllCategories.map((props) => {
        return(
        <Link className="cta cta--gallery-card" key={props.id} to={props.link}>
          <Cards image={props.cover} title={props.title}/>
        </Link>
        )
      })}
      </div>
    </section>
  )
}

export default Gallery;
