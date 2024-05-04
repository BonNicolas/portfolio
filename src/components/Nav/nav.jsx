import { NavLink, useLocation } from 'react-router-dom'


function Nav() {
  const location = useLocation();

  return (
    <nav>
      <NavLink className="nav cta cta--header" to="/Portfolio/">
        Accueil
      </NavLink>
      {!["/Portfolio/Graphics", "/Portfolio/Videos", "/Portfolio/Web"].includes(location.pathname) && (
        <>
          <a className="nav cta cta--header" href='#apropos'>A Propos</a>
          <a className="nav cta cta--header" href='#competences'>Compétences</a>
          <a className="cta cta--header" href='#gallery'>Projets</a>
        </>
      )}
    </nav>
  )
}

export default Nav
