import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './layouts/Header/header';
import Footer from './layouts/Footer/footer';
import Graphics from './pages/Graphics/graphics';
import Videos from './pages/Videos/videos';
import Web from './pages/Web/web';
import Error from './pages/Error/error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import './styles/index.scss';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/graphics" element={<Graphics />} />
        <Route path="/portfolio/videos" element={<Videos />} />
        <Route path="/portfolio/web" element={<Web />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {showScroll && (
        <FontAwesomeIcon
          className={`scroll-to-top ${showScroll ? 'visible' : ''}`}
          size="3x"
          icon={faAnglesUp}
          onClick={scrollToTop}
        />
      )}
    </Router>
  );
}

export default App;
