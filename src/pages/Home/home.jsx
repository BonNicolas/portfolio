import Profile from '../../components/Profile/Profile';
import Gallery from '../../components/Gallery/gallery';
import About from '../../components/About/about';
import Skills from '../../components/Skills/skills';


function Home() {
  return (
    <div>
      <Profile />
      <About />
      <Skills />
      <Gallery />
    </div>
  )
}

export default Home;
