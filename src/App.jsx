import Navbar from './components/navbar/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Models from './pages/Models'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Footer from './components/footer/Footer'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='rental-car/' element={<Home />} />
        <Route path='rental-car/about' element={<About />} />
        <Route path='rental-car/models' element={<Models />} />
        <Route path='rental-car/team' element={<Team />} />
        <Route path='rental-car/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
