import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import Apps from '../../Pages/Apps/Apps';
import Installation from '../../Pages/Installation/Installation';


   const router = createBrowserRouter([
       
    {
        path: '/',
        element: <MainLayout />,
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
            }
        ]
    }


   ])


   export default router;
  