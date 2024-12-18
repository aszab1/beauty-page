import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Prices from './components/Prices.jsx'
import OffersPackages from './components/OffersPackages.jsx'
import Contact from './components/Contact.jsx'
import ChemicalPeels from './components/ChemicalPeels.jsx'
import Microneedling from './components/Microneedling.jsx'
import SkinBoosters from './components/SkinBoosters.jsx'
import FatDissolving from './components/FatDissolving.jsx'
import VitaminShots from './components/VitaminShots.jsx'
import JellyMasks from './components/JellyMasks.jsx'
import LED from './components/LED.jsx'

import './index.css'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/price-list',
        element: <Prices />,
      },
      {
        path: '/offers-packages',
        element: <OffersPackages />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/chemical-peels',
        element: <ChemicalPeels />,
      },
      {
        path: '/microneedling',
        element: <Microneedling />,
      },
      {
        path: '/skin-boosters/face',
        element: <SkinBoosters id='face' />,
      },
      {
        path: '/skin-boosters/eyes',
        element: <SkinBoosters id='eyes' />,
      },
    
      {
        path: '/fat-dissolving',
        element: <FatDissolving />,
      },
      {
        path: '/vitamin-shots',
        element: <VitaminShots />,
      },
      {
        path: '/jelly-masks',
        element: <JellyMasks />,
      },
      {
        path: '/LED-light-therapy',
        element: <LED />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
