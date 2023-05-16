import './cars.css'

const Cars = ({ data, carID }) => {

  return (
    <>
      {
        data[carID].map((car, id) => (
          <div className="box__cars" key={id}>
            <div className="pick__car">
              <img src={car.img} alt="Car image" onLoad={() => setCarLoad(false)} />
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
                  <span className='top__table'>Ar</span>
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
                <div className="description__table-col">
                  <span className='top__table'>Cor</span>
                  <span>{car.color}</span>
                </div>
                <div className="description__table-col">
                  <span className='top__table'>Elétrico</span>
                  <span>{car.electric}</span>
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