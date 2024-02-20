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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetail from './Home/Home Components/ProductDetail';
import SignIn from './SignIn/SignIn';
import MyCart from './Navbar/NavComponents/MyCart';
import UpdareProduct from './Navbar/NavComponents/UpdareProduct';
import PrivateRoute from './PrivateRoute';


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
       element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
       path:"/mycart",
       element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
     {
      path:"/productdetail/:id",
      element:<PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>
     },
     {
      path:"/updateproduct/:id",
      element:<UpdareProduct></UpdareProduct>
     },
     {
      path:"/signin",
      element:<SignIn></SignIn>
     }
    ]
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
<RouterProvider router={router} />
   </QueryClientProvider>
  </AuthProvider> 
  </React.StrictMode>,
   
)
