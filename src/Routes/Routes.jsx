import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from '../pages/root/Root';
import Error from '../pages/root/error/Error';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <Error></Error>,
    children:[
      {
        index:true,
        path:"/",
        Component:Home
      }
      
      
    ]
  }
  
]);