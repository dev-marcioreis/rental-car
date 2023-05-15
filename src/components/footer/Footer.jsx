import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <ul className="content__list">
              <li>
                <span className='logo'>rental car</span>
                <p className='logo__info'>Temos o carro perfeito para você.</p>
              </li>
              <li>
                <a href="#">
                  <span>(11) 5555-2222</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>email@email.com</span>
                </a>
              </li>
            </ul>
            <ul className="content__list-1">
              <li>
                <span className='info'>Unidades</span>
              </li>
              <li>
                <a href="#">Shopping Interlagos</a>
              </li>
              <li>
                <a href="#">Aeroporto Congonhas</a>
              </li>
              <li>
                <a href="#">Aeroporto Guarulhos</a>
              </li>
              <li>
                <a href="#">Shopping Paulista</a>
              </li>
              <li>
                <a href="#">Shopping D</a>
              </li>
              <li>
                <a href="#">Shopping Tatuapé</a>
              </li>
            </ul>
            <ul className="content__list-1">
              <li>
                <span className='info'>Newsletter</span>
              </li>
              <li>
                <span>
                  Receber as últimas notícias e atualizações.
                </span>
              </li>
              <li>
                <input type="email" placeholder="Digite seu e-mail"></input>
              </li>
              <li>
                <button className="submit__email">Enviar</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer