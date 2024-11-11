import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import MiInfo from './pages/MiInfo'
import Index, {loader as citasLoader} from './pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: citasLoader
      },
      {
        path: '/miinfo',
        element: <MiInfo/>
      }
    ]
  },
  {
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
