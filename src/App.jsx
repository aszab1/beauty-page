import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

function App() {
  const location = useLocation()
  const [showButton, setShowButton] = useState(false)
  

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Show or hide the button based on scroll position
      setShowButton(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <ScrollToTop />
    <div>
      <NavBar />
      <main>
      {location.pathname === '/' && <Home />}
      <Outlet />
      {showButton && (
        <button
        className='up-button'
        onClick={scrollTop}
        style={{ bottom: '20px' }}
      ><Icon className='up-button' icon='material-symbols:arrow-warm-up'/></button>
      )}
      <Footer />
      </main>
    </div>
    </>
  )
}

export default App
