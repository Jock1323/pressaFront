import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import{Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import SinglePage from './components/SinglePage/SinglePage'
import About from './components/About/About'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/singlePage' element={<SinglePage />} />
        <Route path='/about' element={<About/> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
