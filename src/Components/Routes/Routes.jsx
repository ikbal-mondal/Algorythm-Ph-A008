import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import Apps from '../../Pages/Apps/Apps';
import Installation from '../../Pages/Installation/Installation';
import AppDetails from '../../Pages/AppDetails/AppDetails';
import ErrorPage from '../../Pages/ErrorPage';


   const router = createBrowserRouter([
       
    {
        path: '/',
        element: <MainLayout />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/apps',
                element: <Apps />
            },
            {
                path: '/installation',
                element: <Installation />
            },
            {
                path: '/app-details/:appsID',
                element: <AppDetails  />
            }
        ]
    }


   ])


   export default router;
  