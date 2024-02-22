import React from 'react'
import NavbarComp from './components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import Store from './pages/Store'
import Sucess from './pages/Sucess'
import Cancel from './pages/Cancel'

const App = () => {
  return (
    <>
    <Container>
    <NavbarComp></NavbarComp>
    <BrowserRouter>
    
      <Routes>
        <Route index element={<Store />}/>
        <Route path='sucess' element={<Sucess />}/>
        <Route path='cancel' element={<Cancel />}/>
      </Routes>
   
    </BrowserRouter>
    </Container>
   
    </>
  )
}

export default App