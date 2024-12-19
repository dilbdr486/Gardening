import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Services from './Components/Services/Services.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import About from './Components/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='services' element = {<Services/>}/>
      <Route path='projects' element = {<Projects/>}/>
      <Route path='blogs' element = {<Blogs/>}/>
      <Route path='about' element = {<About/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
