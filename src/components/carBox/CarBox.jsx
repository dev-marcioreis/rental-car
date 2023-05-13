import { AiOutlineClose as Close, AiFillCar as Car } from 'react-icons/ai'
import { GoLocation as Location } from 'react-icons/go'
import { BsCalendarDate as Calendar } from 'react-icons/bs'
import './style.css'

const CarBox = () => {
  return (
    <>
      <section className="carbox__section" id='booking-section'>
        <div className="container">
          <div className='modal'></div>
          <div className="box__container">
            <div className="box__content">
              <div className="content">
                <h2>Reserve um carro</h2>
                <p className='error__message'>
                  Todos os campos são obrigatórios!
                  <i><Close /></i>
                </p>
                <p className="booking__done">
                  Verifique seu e-mail para confirmar o pedido.
                  <i><Close /></i>
                </p>
                <form className='box__form'>
                  <div className="box__form-car-type">
                    <label>
                      <i><Car /></i> Tipo de carro <strong>*</strong>
                    </label>
                    <select>
                      <option>Selecione o tipo</option>
                      <option value="Volkswagen T Cross">Volkswagen T Cross</option>
                      <option value="Hyundai HB20 Sedan">Hyundai HB20 Sedan</option>
                      <option value="Fiat Pulse">Fiat Pulse</option>
                      <option value="Toyota Corolla">Toyota Corolla</option>
                      <option value="Chery Tiggo 7 Pro">Chery Tiggo 7 Pr</option>
                      <option value="Honda Civic">Honda Civic</option>
                    </select>
                  </div>
                  <div className="box__form-car-type">
                    <label>
                      <i><Location /></i> Retirada
                    </label>
                    <select>
                      <option>Selecione o local</option>
                      <option>Shopping Interlagos</option>
                      <option>Aéropoto Congonhas</option>
                      <option>Aéroporto Guarulhos</option>
                      <option>Shopping Paulista</option>
                      <option>Shopping D</option>
                      <option>Shopping Tatuapé</option>
                    </select>
                  </div>
                  <div className="box__form-car-type">
                    <label>
                      <i><Location /></i> Devolução
                    </label>
                    <select>
                      <option>Selecione o local</option>
                      <option>Shopping Interlagos</option>
                      <option>Aéropoto Congonhas</option>
                      <option>Aéroporto Guarulhos</option>
                      <option>Shopping Paulista</option>
                      <option>Shopping D</option>
                      <option>Shopping Tatuapé</option>
                    </select>
                  </div>
                  <div className="box__form-car-time">
                    <label>
                      <i><Calendar /></i> Data Retirada <strong>*</strong>
                    </label>
                    <input type="date" id='picktime'></input>
                  </div>
                  <div className="box__form-car-time">
                    <label>
                      <i><Calendar /></i> Data Devolução <strong>*</strong>
                    </label>
                    <input type="date" id='droptime'></input>
                  </div>
                  <button type='submit'>Procurar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CarBox