import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import{Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Main/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
