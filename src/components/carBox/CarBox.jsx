import { AiOutlineClose as Close, AiFillCar as Car, AiOutlineInfoCircle as Info } from 'react-icons/ai'
import { GoLocation as Location } from 'react-icons/go'
import { BsCalendarDate as Calendar } from 'react-icons/bs'

import Civic from '../../assets/boxCars/civic.png'
import Corolla from '../../assets/boxCars/corolla.png'
import HB20 from '../../assets/boxCars/hb20.png'
import Pulse from '../../assets/boxCars/pulse.png'
import TCross from '../../assets/boxCars/tcross.png'
import Tiggo from '../../assets/boxCars/tiggo.png'

import { useEffect, useState } from 'react'

import './style.css'

const CarBox = () => {

  // Active Modal
  const [modal, setModal] = useState(false)

  // Booking Car
  const [carType, setCarType] = useState("")
  const [pickUp, setPickUp] = useState("")
  const [dropOff, setDropOff] = useState("")
  const [pickTime, setPickTime] = useState("")
  const [dropTime, setDropTime] = useState("")
  const [carImg, setCarImg] = useState("")

  // Modal Info
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipCode] = useState("")

  // Valores das entradas modal
  const handleName = e => {
    setName(e.target.value)
  }

  const handleLastName = e => {
    setLastName(e.target.value)
  }

  const handlePhone = e => {
    setPhone(e.target.value)
  }

  const handleAge = e => {
    setAge(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handleAddress = e => {
    setAddress(e.target.value)
  }

  const handleCity = e => {
    setCity(e.target.value)
  }

  const handleZip = e => {
    setZipCode(e.target.value)
  }

  // Modal aberto com todas as entradas preenchidas
  const openModal = e => {
    e.preventDefault()

    const errorMessege = document.querySelector('.error__message')

    if(pickUp === "" || dropOff === "" || pickTime === "" || dropTime === "" || carType === "") {
      errorMessege.style.display = 'flex'
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector('.car__box-modal')

      modalDiv.scroll(0, 0)
      errorMessege.style.display = 'none'
    }

  }

  useEffect(() => {
    if(modal === true) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [modal])

  const confirmBooking = e => {
    e.preventDefault()
    
    setModal(!modal)

    const doneMessege = document.querySelector('.booking__done')

    doneMessege.style.display = 'flex'

  }

  const handleCar = e => {
    setCarType(e.target.value)
    setCarImg(e.target.value)
  }

  const handlePick = e => {
    setPickUp(e.target.value)
  }

  const handlePickTime = e => {
    setPickTime(e.target.value)
  }

  const handleDrop = e => {
    setDropOff(e.target.value)
  }

  const handleDropTime = e => {
    setDropTime(e.target.value)
  }

  let imageUrl
  switch (carImg) {
    case "Honda Civic":
      imageUrl = Civic;
      break;
    case "Toyota Corolla":
      imageUrl = Corolla;
      break;
    case "Hyundai HB20 Sedan":
      imageUrl = HB20;
      break;
    case "Fiat Pulse":
      imageUrl = Pulse;
      break;
    case "Volkswagen T Cross":
      imageUrl = TCross;
      break;
    case "Chery Tiggo 7 Pro":
      imageUrl = Tiggo;
      break;
    default:
      imageUrl = "";
  }

  const hideMessage = () => {

    const doneMessege = document.querySelector('.booking__done')
    const errorMessege = document.querySelector('.error__message')

    doneMessege.style.display = 'none'
    errorMessege.style.display = 'none'
  }

  return (
    <>
      <section className="carbox__section" id='booking__section'>

        {/*==========Modal Overlay==========*/}
        <div onClick={openModal} className={`modal-overlay ${modal ? "active-modal" : ""}`}></div>
        {/*==========Modal Overlay==========*/}

        <div className="container">
          <div className='modal'></div>
          <div className="box__container">
            <div className="box__content">
              <div className="content">
                <h2>Reserve um carro</h2>
                <p className='error__message'>
                  Todos os campos são obrigatórios!
                  <i onClick={hideMessage}><Close /></i>
                </p>
                <p className="booking__done">
                  Verifique seu e-mail para confirmar o pedido.
                  <i onClick={hideMessage}><Close /></i>
                </p>
                <form className='box__form'>
                  <div className="box__form-car-type">
                    <label>
                      <i><Car /></i> Tipo de carro <strong>*</strong>
                    </label>
                    <select value={carType} onChange={handleCar}>
                      <option>Selecione o tipo</option>
                      <option value="Volkswagen T Cross">Volkswagen T Cross</option>
                      <option value="Hyundai HB20 Sedan">Hyundai HB20 Sedan</option>
                      <option value="Fiat Pulse">Fiat Pulse</option>
                      <option value="Toyota Corolla">Toyota Corolla</option>
                      <option value="Chery Tiggo 7 Pro">Chery Tiggo 7 Pro</option>
                      <option value="Honda Civic">Honda Civic</option>
                    </select>
                  </div>
                  <div className="box__form-car-type">
                    <label>
                      <i><Location /></i> Retirada
                    </label>
                    <select value={pickUp} onChange={handlePick}>
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
                    <select value={dropOff} onChange={handleDrop}>
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
                    <input value={pickTime} onChange={handlePickTime} type="date" id='picktime'></input>
                  </div>
                  <div className="box__form-car-time">
                    <label>
                      <i><Calendar /></i> Data Devolução <strong>*</strong>
                    </label>
                    <input value={dropTime} onChange={handleDropTime} type="date" id='droptime'></input>
                  </div>
                  <button type='submit' onClick={openModal}>Procurar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*==========Modal==========*/}
      <aside className={`car__box-modal ${modal ? "active-modal" : ""}`}>
        <div className='container'>
          <div className="car__box-modal-title">
            <h2>Resumo da reserva</h2>
            <i onClick={openModal}><Close /></i>
          </div>
          <div className="car__box-modal-messege">
            <h4>
              <i><Info /></i>
              <strong>Ao concluir esta consulta de reserva, você receberá:</strong>
            </h4>
            <p>
              Seu voucher para apresentar na chegada ao balcão <small>(152458)</small>, e o número de suporte ao cliente <small>(0800-800-800)</small>.
            </p>
          </div>
          <div className="car__box-modal-car-info">
            <div className="modal__dates">
              <div className="car__box-modal-dates__info">
                <h5>Local e Horário</h5>
                <span>
                  <i><Calendar /></i>
                  <div>
                    <h6>Data e Hora de retirada</h6>
                    <p>
                      {pickTime}
                      <input type="time" className='input__time' />
                    </p>
                  </div>
                </span>
              </div>
              <div className="car__box-modal-dates__info">
                <span>
                  <i><Calendar /></i>
                  <div>
                    <h6>Data e hora de entrega</h6>
                    <p>
                      {dropTime}
                      <input type="time" className='input__time' />
                    </p>
                  </div>
                </span>
              </div>
              <div className="car__box-modal-dates__info">
                <span>
                  <i><Location /></i>
                  <div>
                    <h6>Local de Retirada</h6>
                    <p>{pickUp}</p>
                  </div>
                </span>
              </div>
              <div className="car__box-modal-dates__info">
                <span>
                  <i><Location /></i>
                  <div>
                    <h6>Local de entrega</h6>
                    <p>{dropOff}</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="car__box-modal-car-info">
              <h5 className='type__car-box'>
                <span>{carType}</span>
              </h5>
              <div className='box__car-image'>
                {imageUrl && <img src={imageUrl} alt='Car image' />}
              </div>
            </div>
          </div>
          <div className="car__box-modal-personal-info">
            <h4>Preencha seus dados</h4>
            <form className="modal__form">
              <div className="form__info-2col">
                <span>
                  <label>Nome <small>*</small></label>
                  <input value={name} onChange={handleName} type="text" placeholder='Digite seu nome' />
                  <p className='modal__error-messege'>Este campo é obrigatório!</p>
                </span>
                <span>
                  <label>Sobrenome <small>*</small></label>
                  <input value={lastName} onChange={handleLastName} type="text" placeholder='Digite seu sobrenome' />
                  <p className='modal__error-messege'>Este campo é obrigatório!</p>
                </span>
                <span>
                  <label>Telefone <small>*</small></label>
                  <input value={phone} onChange={handlePhone} type="tel" placeholder='Digite seu telefone' />
                  <p className='modal__error-messege'>Este campo é obrigatório!</p>
                </span>
                <span>
                  <label>Idade <small>*</small></label>
                  <input value={age} onChange={handleAge} type="number" placeholder='Maior que 18 anos' />
                  <p className='modal__error-messege'>Este campo é obrigatório!</p>
                </span>
              </div>
              <div className="form__info-1col">
                <span>
                  <label>E-mail <small>*</small></label>
                  <input value={email} onChange={handleEmail} type="email" placeholder='Digite seu e-mail' />
                  <p className='modal__error-messege'>Este campo é obrigatório!</p>
                </span>
                <span>
                  <label>Endereço <small>*</small></label>
                  <input value={address} onChange={handleAddress} type="text" placeholder='Digite nome da rua' />
                  <p className='modal__error-messege'>Este campo é obrigatório!</p>
                </span>
              </div>
              <div className="form__info-2col">
                <span>
                  <label>Cidade <small>*</small></label>
                  <input value={city} onChange={handleCity} type="text" placeholder='Digite nome da cidade' />
                  <p className='modal__error-messege'>Este campo é obrigatório!</p>
                </span>
                <span>
                  <label>CEP <small>*</small></label>
                  <input value={zipcode} onChange={handleZip} type="text" placeholder='Digite o CEP' />
                  <p className='modal__error-messege'>Este campo é obrigatório!</p>
                </span>
              </div>
              <span className='modal__form-check'>
                <input type="checkbox" />
                <p>Envie-me notícias e atualizações.</p>
              </span>
              <div className="reserved__btn">
                <button onClick={confirmBooking} className='reservedBtn'>Alugar agora</button>
              </div>
            </form>
          </div>
        </div>
      </aside>

    </>
  )
}

export default CarBox