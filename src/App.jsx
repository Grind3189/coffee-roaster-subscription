import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import AboutUs from './pages/About us/AboutUs'
import Subscribe from './pages/Subscribe/Subscribe'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='subscribe' element={<Subscribe />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
