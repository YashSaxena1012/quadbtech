import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Pages/About'
import Booking from './Pages/Booking'
import Home from './Pages/Home'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/About' element={<About/>} />
        <Route exact path='/Booking' element={<Booking/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
