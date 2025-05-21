import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';

import Home from './pages/Home/Home';
import Root from './pages/root/Root';
import Error from './pages/root/error/Error';
import Blogs from './components/body/Blogs';
import MyBookings from './components/body/MyBookings';
import DoctorDetails from './pages/DoctorDetails/DoctorDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "Blogs", element: <Blogs /> },
      {
        path: 'DoctorDetails/:id',
        loader: () => fetch('doctors.json'),
        Component: DoctorDetails
      },
      {
        path: "/MyBookings",
        Component: MyBookings
      }

    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
