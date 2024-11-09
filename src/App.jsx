import React from 'react'
import Signup from './LoginSignup/Signup'
import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './LoginSignup/Login'
import Home from './LoginSignup/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path='/' 
      element={<Signup/>}/>

<Route 
      path='/login' 
      element={<Login/>}/>

<Route 
      path='/home' 
      element={<Home/>}/>
    </Routes>
 
    </BrowserRouter>
  )
}

export default App
