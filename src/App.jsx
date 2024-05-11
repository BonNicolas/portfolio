import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './layouts/Header/header';
import Footer from './layouts/Footer/footer';
import Graphics from './pages/Graphics/graphics';
import Videos from './pages/Videos/videos';
import Web from './pages/Web/web';
import Error from './pages/Error/error';
import './styles/index.scss';


function App() {
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
      </Router>
  )
}


export default App
