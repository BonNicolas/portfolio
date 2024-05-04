import Experience from '../Experience/experience'
import { faAward, faBook } from "@fortawesome/free-solid-svg-icons"

const ExperienceContent = [

  { 
      id : "1",
      icon : faAward,
      title : "Experiences",
      first : "15 années",
      two : "dans le multimédia",
  },

  {
      id : "2",
      icon : faBook,
      title : "Formations",
      first : "MJM Graphic Design",
      two : "OpenClassRooms"
      
  },
  
]

function About() {
    return (
      <section id='apropos' className="about">
        <h2>A propos</h2>
        <div className='about__container'>
        <div className='about__details'>
        <div className="about__cards">
          {ExperienceContent.map((data, index) => {
            const animationClass = index === 0 ? 'card--animation-hor-left' : 'card--animation-hor-right';
            return(
              <Experience key={data.id}
              icon={data.icon}
              title={data.title} 
              first={data.first}
              two={data.two}
              animationClass={animationClass}
              />
            )
          })}
        </div>
        <p className='about__text'>Après trois années d'études dans une école spécialisée qui m'a formé à la 2D ( Photoshop, Illustrator,After Effects,... ) et à la 3D ( sur le logiciel 3DS Max ), j'ai obtenu un diplôme de concepteur de supports de communication. J'ai travaillé ensuite dans une société de production, diverses entreprises de communication ainsi que dans une société de serious game, où j'ai pu mettre à profit mes connaissances, ma motivation, mon dynamisme ainsi que mes idées créatives dans différents projets multimédia.</p>
        </div>
        </div>
      </section>
    )
  }
  
  export default About