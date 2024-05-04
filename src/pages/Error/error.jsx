import { Link } from "react-router-dom"
import ErrorImage from "../../assets/404.svg"


function Error() {
    return (
      <section className="error">
        <img className="error__image" src={ErrorImage} alt='Banner'/>
        <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/Portfolio/">Retourner sur la page d'accueil</Link>
      </section>
    )
  }
  
  export default Error