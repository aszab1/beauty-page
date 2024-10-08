import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const location = useLocation()

  return (
    <>
    <ScrollToTop />
    <div>
      <NavBar />
      <main>
      {location.pathname === '/' && <Home />}
      <Outlet />
      <Footer/>
      </main>
    </div>
    </>
  )
}

export default App
