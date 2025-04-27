import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {Home} from "./pages/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ProductPage } from './pages/ProductPage/ProductPage'

function App() {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/product/:id' element={<ProductPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/> 
    </>
  )
}

export default App
