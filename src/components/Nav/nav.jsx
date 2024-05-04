import { NavLink, useLocation } from 'react-router-dom'


function Nav() {
  const location = useLocation();

  return (
    <nav className='nav-main'>
      <NavLink className="nav-main__links cta cta--header" to="/Portfolio/">
        Accueil
      </NavLink>
      {!["/Portfolio/Graphics", "/Portfolio/Videos", "/Portfolio/Web"].includes(location.pathname) && (
        <>
          <a className="nav-main__links cta cta--header" href='#apropos'>A Propos</a>
          <a className="nav-main__links cta cta--header" href='#competences'>Compétences</a>
          <a className="cta cta--header" href='#gallery'>Projets</a>
        </>
      )}
    </nav>
  )
}

export default Nav
