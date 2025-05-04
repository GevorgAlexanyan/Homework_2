import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {Home} from "./pages/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { BasketPage } from './pages/BasketPage/BasketPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/product/:id' element={<ProductPage/>}></Route>
           <Route path="/BasketPage" element={<BasketPage/>}/>
        </Routes>
      <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App
