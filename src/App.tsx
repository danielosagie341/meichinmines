import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import OurService from './pages/OurService'
import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/' || location.pathname === '/home'

  // A simple way to get the current page name from the path
  const currentPage = location.pathname.split('/')[1] || 'home'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
      <Header currentPage={currentPage} isHomePage={isHomePage} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route  path="/about"  element={<About /> } />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/our-service/:serviceId" element={<OurService />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App