import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Salon from './components/Salon.jsx'
import Prices from './components/Prices.jsx'
import OffersPackages from './components/OffersPackages.jsx'
import Contact from './components/Contact.jsx'
import Book from './components/Book.jsx'
import Treatments from './components/Treatments.jsx'
import ChemicalPeels from './components/ChemicalPeels.jsx'

import './index.css'
// import './styles/main.scss'
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
        path: '/book',
        element: <Book />,
      },
      {
        path: '/treatments',
        element: <Treatments />,
      },
      {
        path: '/treatments/chemical-peels',
        element: <ChemicalPeels />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
