import './App.css'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  return (
    <>
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
