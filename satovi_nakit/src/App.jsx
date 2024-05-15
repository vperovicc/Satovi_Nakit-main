import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Satovi from './pages/Satovi'
import Nakit from './pages/Nakit'

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/satovi' element={<Satovi/>} />
            <Route path='/nakit' element={<Nakit/>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App