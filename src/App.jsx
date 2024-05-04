import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Header from './layouts/Header/header'
import Footer from './layouts/Footer/footer'
import Graphics from './pages/Graphics/graphics'
import Videos from './pages/Videos/videos'
import Web from './pages/Web/web'
import Error from './pages/Error/error'
import './styles/index.scss'


function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/Portfolio/" element={<Home />} />   
              <Route path="/Portfolio/Graphics" element={<Graphics />} />
              <Route path="/Portfolio/Videos" element={<Videos />} />
              <Route path="/Portfolio/Web" element={<Web />} />
              <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </Router>
  )
}


export default App
