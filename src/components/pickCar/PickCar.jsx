import { useState } from 'react'
import Cars from '../cars/Cars'
import './style.css'
import { Data_Cars } from '../Data_Cars.js'

const PickCar = () => {

  const [active, setActive] = useState('SecondCar')
  const [btnColor, setBtnColor] = useState('btn1')

  const btnID = id => {
    setBtnColor(btnColor === id ? "" : id)
  }

  const coloringBtn = id => {
    return btnColor === id ? "colored__btn" : "";
  }

  return (
    <>
      <section className='pick__section'>
        <div className="container">
          <div className="pick__container">
            <div className="pick__container-title">
              <h3>Modelos de veículos</h3>
              <h2>Nossa frota para alugar</h2>
              <p>
                Escolha entre uma várias opções de veículos para alugar e embarque na sua próxima aventura.
              </p>
            </div>
            <div className="pick__container-car-content">
              <div className="pick__box">
                <button className={`${coloringBtn('btn1')}`} onClick={() => {setActive('SecondCar'); btnID('btn1')}}>Toyota Corolla</button>
                <button className={`${coloringBtn('btn2')}`} onClick={() => {setActive('FirstCar'); btnID('btn2')}} id='btn2'>Honda Civic</button>
                <button className={`${coloringBtn('btn3')}`} onClick={() => {setActive('ThirdCar'); btnID('btn3')}} id='btn3'>Hyundai HB20 Sedan</button>
                <button className={`${coloringBtn('btn4')}`} onClick={() => {setActive('FourthCar'); btnID('btn4')}} id='btn4'>Fiat Pulse</button>
                <button className={`${coloringBtn('btn5')}`} onClick={() => {setActive('FifthCar'); btnID('btn5')}} id='btn5'>Volkswagen T-Cross</button>
                <button className={`${coloringBtn('btn6')}`} onClick={() => {setActive('SixthCar'); btnID('btn6')}} id='btn6'>Chery Tiggo 7 Pro</button>
              </div>
              { active === "FirstCar" && <Cars data={Data_Cars} carID={0} /> }
              { active === "SecondCar" && <Cars data={Data_Cars} carID={1} /> }
              { active === "ThirdCar" && <Cars data={Data_Cars} carID={2} /> }
              { active === "FourthCar" && <Cars data={Data_Cars} carID={3} /> }
              { active === "FifthCar" && <Cars data={Data_Cars} carID={4} /> }
              { active === "SixthCar" && <Cars data={Data_Cars} carID={5} /> }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PickCar