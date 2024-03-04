import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<SignIn/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/about' element={<About/>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App
