import './App.css'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './components/Home'

function App() {
  const location = useLocation()

  return (
    <>
    <div>
      <NavBar />
      <main>
      {location.pathname === '/' && <Home />}
      <Outlet />
      </main>
    </div>
    </>
  )
}

export default App
