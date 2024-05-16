import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Satovi from './pages/Satovi'
import Nakit from './pages/Nakit'
import Casio from './pages/Casio'
import Tissot from './pages/Tissot'
import Armani from './pages/Armani'
import Gshock from './pages/GShock'
import Kors from './pages/Kors'
import Boss from './pages/Boss'
import Edifice from './pages/Edifice'
import Fossil from './pages/Fossil'

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/satovi' element={<Satovi/>} />
            <Route path='/nakit' element={<Nakit/>} />

            <Route path='/casio' element={<Casio/>} />
            <Route path='/tissot' element={<Tissot/>}/>
            <Route path='/armani' element={<Armani/>}/>
            <Route path='/gshock' element={<Gshock/>}/>
            <Route path='/kors' element={<Kors/>}/>
            <Route path='/boss' element={<Boss/>}/>
            <Route path='/edifice' element={<Edifice/>}/>
            <Route path='/fossil' element={<Fossil/>}/>
            <Route path='*' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App