import Navbar from './components/navbar/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Models from './pages/Models'
import Team from './pages/Team'
import Contact from './pages/Contact'

import './App.css'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='models' element={<Models />} />
        <Route path='team' element={<Team />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
