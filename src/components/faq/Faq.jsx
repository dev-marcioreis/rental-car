import { RiArrowDownSLine as Down } from 'react-icons/ri'
import './faq.css'
import { useState } from 'react'

const Faq = () => {

  const [activeQuestion, setActiveQuestion] = useState('q1')

  const openQuestion = quest => {
    setActiveQuestion(activeQuestion === quest ? "" : quest)
  }

  const getAnswer = ans => {
    return activeQuestion === ans ? "active__answer" : "";
  } 

  const getQuestion = get => {
    return activeQuestion === get ? "active__question" : "";
  }

  return (
    <>
      <section className="faq">
        <div className="container">
          <div className="faq__content">
            <div className="faq__content-title">
              <h2>Perguntas frequentes</h2>
              <p>Perguntas frequentes sobre o processo de reserva de aluguel de carros em nosso site</p>
            </div>
            <div className="all__questions-content">
              <div className="questions__box">
                <div className={`question ${getQuestion('q1')}`} id='q1' onClick={() => openQuestion('q1')}>
                  <p>Como funciona a locação de veículo?</p>
                  <i><Down /></i>
                </div>
                <div className={`answer ${getAnswer('q1')}`} id='q1' onClick={() => openQuestion('q1')}>
                  <p>Você pode fazer a sua reserva diretamente no site. Se preferir, é possível realizar a reserva por telefone em nossa Central de Reservas 24h, ligando para o 0800-800-800, e garantindo a disponibilidade do carro para o período desejado.</p>
                </div>
              </div>
              <div className="questions__box">
                <div className={`question ${getQuestion('q2')}`} id='q2' onClick={() => openQuestion('q2')}>
                  <p>Qual é a forma de pagamento?</p>
                  <i><Down /></i>
                </div>
                <div className={`answer ${getAnswer('q2')}`} id='q2' onClick={() => openQuestion('q2')}>
                  <p>O pagamento é realizado de forma automática pelo cartão de crédito cadastrado e, caso não seja possível realizar a cobrança no cartão, um boleto será gerado no 30º dia com vencimento em 2 dias úteis.</p>
                </div>
              </div>
              <div className="questions__box">
                <div className={`question ${getQuestion('q3')}`} id='q3' onClick={() => openQuestion('q3')}>
                  <p>Quanto custa a caução?</p>
                  <i><Down /></i>
                </div>
                <div className={`answer ${getAnswer('q3')}`} id='q3' onClick={() => openQuestion('q3')}>
                  <p>Esse valor do caução pode variar de acordo com a categoria do veículo, local e data da retirada. O valor pode variar de R$ 500,00 a R$ 800,00 para veículos de categoria econômica.</p>
                </div>
              </div>
              <div className="questions__box">
                <div className={`question ${getQuestion('q4')}`} id='q4' onClick={() => openQuestion('q4')}>
                  <p>Quanto custa a diária do aluguel de um veículo?</p>
                  <i><Down /></i>
                </div>
                <div className={`answer ${getAnswer('q4')}`} id='q4' onClick={() => openQuestion('q4')}>
                  <p>O preço do aluguel de um carro e o valor por diária variam muito de acordo com a locadora, a categoria de carro escolhida e a data do aluguel. Um carro econômico pode ser alugado por pouco mais de R$ 50,00 a diária, enquanto carros maiores e mais completos como SUVs e sedãs podem chegar a mais de R$ 200,00 por dia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq