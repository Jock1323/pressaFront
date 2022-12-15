import React from 'react'
import Filter from '../Filter/Filter'
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
      </main>
    </>
  )
}

export default Main
