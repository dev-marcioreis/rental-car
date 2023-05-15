import { useState } from 'react'
import './style.css'

const Cars = ({ data, carID }) => {

  const [carLoad, setCarLoad] = useState(true)

  return (
    <>
      {
        data[carID].map((car, id) => (
          <div className="box__cars" key={id}>
            <div className="pick__car">
              {carLoad && <span className='loader'></span>}
              <img src={car.img} alt="Car image" style={{ display: carLoad ? 'none' : 'block' }} onLoad={() => setCarLoad(false)} />
            </div>
            <div className="pick__description">
              <div className="description__price">
                <span>R$ {car.price} Diária</span>
              </div>
              <div className="description__table">
                <div className="description__table-col">
                  <span className='top__table'>Modelo</span>
                  <span>{car.model}</span>
                </div>
                <div className="description__table-col">
                  <span className='top__table'>Fabricante</span>
                  <span>{car.mark}</span>
                </div>
                <div className="description__table-col">
                  <span className='top__table'>Ano</span>
                  <span>{car.year}</span>
                </div>
                <div className="description__table-col">
                  <span className='top__table'>Portas</span>
                  <span>{car.doors}</span>
                </div>
                <div className="description__table-col">
                  <span className='top__table'>Ar-condicionado</span>
                  <span>{car.air}</span>
                </div>
                <div className="description__table-col">
                  <span className='top__table'>Câmbio</span>
                  <span>{car.transmission}</span>
                </div>
                <div className="description__table-col">
                  <span className='top__table'>Combustível</span>
                  <span>{car.fuel}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Cars