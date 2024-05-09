
import './App.css'
import Registration from './Pages/Forms/Registration'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Success from './Pages/Success/Success'
import Home from './Pages/Home/Home.jsx'


function App() {
  const router = createBrowserRouter([
     {
      path: "/",
      element: <Home/> 
     },
     {
      path: "/form",
      element: <Registration/>
     },
     {
      path: "/success",
      element:<Success/>
     },
  ])

  return (
    <>
       
     <RouterProvider router={router} />
     
        
    </>
  )
}

export default App
