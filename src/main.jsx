import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import MapPage from './pages/MapPage.jsx'
import TeamsPage from './pages/TeamsPage.jsx'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
        {
          path: "home/",
          element: <HomePage />
        },
        {
          path: "teams/",
          element: <TeamsPage />
        },
        {
          path: "about/",
          element: <AboutPage />
        },
        {
          path: "map/",
          element: <MapPage />
        }
      ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
