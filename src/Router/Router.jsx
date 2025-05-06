import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Apps from '../Pages/Apps';
import AppDetails from '../Pages/AppDetails';
import Privetroute from '../Components/Privetroute';
import UserProfile from '../Pages/UserProfiile';
import ErrorPages from '../Pages/ErrorPages'; // This is your 404 page
import Loading from '../Pages/Loading';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Use element not Component
    errorElement: <ErrorPages />, // This will catch any error in this route branch
    children: [
      {
        index: true,
        loader: () => fetch('/data.json'),
        element: <Home />,
        hydrateFallbackElement : <Loading></Loading>
      },
      {
        path: "/Apps",
        loader: () => fetch('/data.json'),
        element: <Apps />,
        hydrateFallbackElement : <Loading></Loading>
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Register",
        element: <Register />
      },
      {
        path: "/AppDetails/:id",
        loader: () => fetch('/data.json'),
        element: (
          <Privetroute>
            <AppDetails />
          </Privetroute>
        ),
        hydrateFallbackElement : <Loading></Loading>
      },
      {
        path: "/UserProfile",
        element: <UserProfile />
      },
    
    ]
  },
  {
    path: "*", // This catches any undefined child route (like /abc)
    element: <ErrorPages />
  }
]);
