import { Link } from 'react-router-dom'
import HeroCar from '../../assets/heroCar.png'
import { AiOutlineCheckCircle as Check, AiOutlineArrowRight as Arrow, AiOutlineArrowUp as ArrowTop } from 'react-icons/ai'
import './hero.css'
import { useEffect, useState } from 'react'

const Hero = () => {

  const [up, setUp] = useState(false)

  const scrollToTop = () => {
    window.scrollTo( { top: (0, 0), behavior: "smooth" } )
  }

  useEffect(() => {
    const onPageScroll = () => {
      if(window.pageYOffset > 500) {
        setUp(true)
      } else {
        setUp(false)
      }
    }

    window.addEventListener('scroll', onPageScroll)

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    }

  }, [])

  return (
    <>
      <section className='hero__section' id='home'>
        <div className="container">
          <div className="hero__content">
            <div className="hero__content-info">
              <h4>Planeje sua viagem agora</h4>
              <h2>Economize <span>muito.....</span> com o nosso aluguel de carros</h2>
              <p>Preços imbatíveis, milhas ilimitadas, opções de coleta flexíveis e muito mais.</p>
              <div className="hero__text-btns">
                <Link className='text__btn' to="#">
                  alugue <Check />
                </Link>
                <Link className='text__btn-learn-more' to="#">
                  saiba mais <Arrow />
                </Link>
              </div>
            </div>
            <img src={HeroCar} className='hero__bg-car' alt="Hero image" />
          </div>
        </div>
        <div className={`scroll__up ${up ? "show__scroll" : ""}`} onClick={scrollToTop}>
          <ArrowTop />
        </div>
      </section>
    </>
  )
}

export default Hero
