import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Salon from './components/Salon.jsx'
import Prices from './components/Prices.jsx'
import OffersPackages from './components/OffersPackages.jsx'
import Contact from './components/Contact.jsx'
import Treatments from './components/Treatments.jsx'
import ChemicalPeels from './components/ChemicalPeels.jsx'
import Microneedling from './components/Microneedling.jsx'
import SkinBoosters from './components/SkinBoosters.jsx'
import FatDissolving from './components/FatDissolving.jsx'
import VitaminShots from './components/VitaminShots.jsx'
import AddTreatments from './components/AddTreatments.jsx'

import './index.css'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/salon',
        element: <Salon />,
      },
      {
        path: '/prices',
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
        path: '/treatments',
        element: <Treatments />,
      },
      {
        path: '/treatments/chemical-peels',
        element: <ChemicalPeels />,
      },
      {
        path: '/microneedling',
        element: <Microneedling />,
      },
      {
        path: '/skin-boosters',
        element: <SkinBoosters />,
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
        path: '/additional-treatments',
        element: <AddTreatments />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
