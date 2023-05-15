import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './navbar.css'
import { useState } from 'react'
import { AiOutlineMenu as Menu, AiOutlineClose as MenuClose } from 'react-icons/ai'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const openNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <nav>
      <div className='navbar'>
        <div className='container navbar__container'>
            <div className="navbar__image">
              <Link to="rental-car/" onClick={() => window.scrollTo(0, 0)}>
                  <img src={Logo} alt="Logo Image" />
              </Link>
            </div>
            <ul className="navbar__links">
              <li>
                <Link className='home__link' to="rental-car/">
                  início
                </Link>
              </li>
              <li>
                <Link className="about-link" to="rental-car/about">
                  sobre
                </Link>
              </li>
              <li>
                <Link className="models-link" to="rental-car/models">
                  modelos
                </Link>
              </li>
              <li>
                <Link className="team-link" to="rental-car/team">
                  equipe
                </Link>
              </li>
              <li>
                <Link className="contact-link" to="rental-car/contact">
                  contato
                </Link>
              </li>
            </ul>
            <div className="navbar__btn">
              <Link className="btn__sign-in" to="rental-car/">
                Entrar
              </Link>
              <Link className="btn__register" to="rental-car/">
                Cadastre-se
              </Link>
            </div>
            <div className="mobile__toggle" onClick={openNavbar}>
              <Menu />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className={`navbar__mobile ${navbar ? 'open__navbar' : ''}`}>
          <div onClick={openNavbar} className='navbar__mobile-close'>
            <MenuClose />
          </div>
          <ul className="navbar__mobile-links">
              <li>
                <Link onClick={openNavbar} to="/">
                  início
                </Link>
              </li>
              <li>
                <Link onClick={openNavbar}  to="/about">
                  sobre
                </Link>
              </li>
              <li>
                <Link onClick={openNavbar}  to="/models">
                  modelos
                </Link>
              </li>
              <li>
                <Link onClick={openNavbar}  to="/team">
                  equipe
                </Link>
              </li>
              <li>
                <Link onClick={openNavbar}  to="/contact">
                  contato
                </Link>
              </li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar