import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Signup from './views/Signup'
import Login from './views/Login'
import NotFound from './views/NotFound'
import GuestLayout from './components/GuestLayout'
import DefaultLayout from './components/DefaultLayout'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <App />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }

])

export default router