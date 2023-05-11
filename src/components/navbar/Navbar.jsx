import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './style.css'

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className='container navbar__container'>
            <div className="navbar__image">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <img src={Logo} alt="Logo Image" />
              </Link>
            </div>
            <ul className="navbar__links">
              <li>
                <Link className='home__link' to="/">
                  início
                </Link>
              </li>
              <li>
                <Link className="about-link" to="/about">
                  sobre
                </Link>
              </li>
              <li>
                <Link className="models-link" to="/models">
                  modelos
                </Link>
              </li>
              <li>
                <Link className="team-link" to="/team">
                  equipe
                </Link>
              </li>
              <li>
                <Link className="contact-link" to="/contact">
                  contato
                </Link>
              </li>
            </ul>
            <div className="navbar__btn">
              <Link className="btn__sign-in" to="/">
                Entrar
              </Link>
              <Link className="btn__register" to="/">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar