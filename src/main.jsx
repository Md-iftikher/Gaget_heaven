import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Errorpage from "./Components/Errorpage/Errorpage.jsx";
import Home from './Components/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import { CartProvider } from './Components/ContextApi/Context';

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
        path: "products/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/ProductData.json")
      },
      {
        path: "dashboard",
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
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);