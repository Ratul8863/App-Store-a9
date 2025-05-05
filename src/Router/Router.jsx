import React from 'react';

import {
  createBrowserRouter,

} from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Pages/Home';

import Login from '../Pages/Login';
import Register from '../Pages/Register';

import Apps from '../Pages/Apps';
import AppDetails from '../Pages/AppDetails';
import Privetroute from '../Components/Privetroute';
import UserProfile from '../Pages/UserProfiile';
import ErrorPages from '../Pages/ErrorPages';




export const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    // errorElement: <ErrorPages></ErrorPages>,
    //   errorElement : <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        loader: () => fetch('/data.json'),
        Component: Home
      },
      {
        path: "/Apps",
        loader: () => fetch('/data.json'),
        Component: Apps

      },

      {
        path: "/Login",
        Component: Login

      },
      {
        path: "/Register",
        Component: Register

      },
      {
        path: "/AppDetails/:id",
        loader: () => fetch('/data.json'),
        element: <Privetroute>
          <AppDetails></AppDetails>
        </Privetroute>

      },
      {
        path: "/UserProfile",
        Component: UserProfile
      },


    ]

    
  },
  {
    path : '*',
    element : <ErrorPages></ErrorPages>
  }
]);










//   {path : "Blogs" ,
//     loader : ()=> fetch ('../Blogs.json'),
//     Component : Blogs
// },

// {
//   path : "/Doctorsdetails/:newid" ,
//   loader : ()=> fetch ('../Doctors.json'),
//   Component : Doctorsdetails
// },

// {
// path : "/Bookings" ,
// loader : ()=> fetch ('../Doctors.json'),
// Component : Bookings
// },


// {
// path : "/Contactus" ,
// Component : Contactus
// }