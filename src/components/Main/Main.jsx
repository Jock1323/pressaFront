import React from 'react'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'
import boy from "../../assets/images/boy.png"
import boy2 from "../../assets/images/boy2.png"
import "./main.scss"
function Main() {
  return (
    <>
      <main className='main'>
        <section className="hero">
          <div className="container">
            <h1 className='hero__title'>Eng so’ngi master klasslar va tadbirlar bizning saytda</h1>
            <Filter/>
          </div>
        </section>
        <section className="news">
          <div className="container">
            <h3 className='news__title'>Oxirgi e'lonlar</h3>
            <div className="news__flex">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
          <button className="load-more">
            Ko'proq ko'rish
          </button>
          </div>
        </section>
        <section className='info'>
          <div className="container">
            <div className="info__inner">
              <div className="info__box-left">
                <h3 className='info__box__title'>E’LONLARINGIZNI BIZNI SAYTDA BERING</h3>
                <div className="info__box__img">
                  <img src={boy} alt="model"  />
                </div>
              </div>
              <div className="info__box-right">
                <h3 className='info__box__title'>ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</h3>
                <div className="info__box__img" id='info__boy__img'>
                  <img src={boy2} alt="model"  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main
