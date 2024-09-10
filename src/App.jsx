
import './App.css'
import Navbar from './components/constants/Navbar'
import Footer from './components/constants/Footer'
import { Routes, Route } from 'react-router-dom'
import Prefoot from './components/constants/Prefoot'
import Personal from './components/Person'
import Home from './components/Home'
import Anchors from './components/constants/Anchors'
import Businessbody from './components/Business/Businessbody'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Person' element={<Personal/>}/> 
    <Route path='/Business' element={<Businessbody/>}/> 
    </Routes>
    <Anchors/>
    <Prefoot/>
    <Footer/>
    </>
  )
}

export default App
