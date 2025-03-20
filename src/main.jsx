import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Users from './components/Users/Users.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://json
          placeholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
