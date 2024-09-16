
import './App.css'
import Navbar from './components/constants/Navbar'
import Footer from './components/constants/Footer'
import { Routes, Route } from 'react-router-dom'
import Prefoot from './components/constants/Prefoot'
import Personal from './components/Person'
import Home from './components/Home'
import Anchors from './components/constants/Anchors'
import Businessbody from './components/Business/Businessbody'
import Aboutbody from './components/Aboutus/Aboutbody'
import Invstbody from './components/Investment/Invstbody'
import Locatebody from './components/Locate/Locatebody'
import Branch from './components/Locate/Branch'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Person' element={<Personal/>}/> 
    <Route path='/Business' element={<Businessbody/>}/>
    <Route path='/Aboutus' element={<Aboutbody/>}/>\
    <Route path='/Invest' element={<Invstbody/>}/>
    <Route path='/Locate' element={<Locatebody/>}/>
    <Route path='/Branch' element={<Branch/>}/>
    </Routes>
    <Anchors/>
    <Prefoot/>
    <Footer/>
    </>
  )
}

export default App
