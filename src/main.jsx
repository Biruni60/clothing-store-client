import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Home/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import AuthProvider from './AuthProvider';
import AddProduct from './Navbar/NavComponents/AddProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
       path:"/addproduct",
       element:<AddProduct></AddProduct>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
   <RouterProvider router={router} />
  </AuthProvider> 
  </React.StrictMode>,
 
)
