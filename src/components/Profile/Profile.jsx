import { Link } from 'react-router-dom'
import ImageProfile from '../../assets/profil_01.png'
import CV from '../../assets/BON_NICOLAS_CV_2024.pdf'
const GitHubPage = "https://github.com/BonNicolas"



function Profile (){
    return(
        <section className='profile'>
            <img className='profile__img' src={ImageProfile} alt="Profil"/>
            <div className='profile__container-text'>
                <h1>Nicolas B.</h1>
                <p>Infographiste 2D/3D</p>
                <div>
                <Link to={CV} target='_blank'>
                <button className='button button--cv'>Télécharger CV</button>
                </Link>
                </div>
                <Link to={GitHubPage} target='_blank'>
                <div className='profile__icon'> 
                <i className='devicon-github-original'></i>
                </div>
                </Link>
            </div>
        </section>
    )
}

export default Profile