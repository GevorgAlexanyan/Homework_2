import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home/Home"
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { BasketPage } from './pages/BasketPage/BasketPage'
import { SignUpPage } from './pages/SignUpPage/SignUpPage'
import { LogInPage } from './pages/LogInPage/LogInPage'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Login" element={<LogInPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
