import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Errorpage from "./Components/Errorpage/Errorpage.jsx"
import Home from './Components/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "statitics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
