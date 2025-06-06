import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home/Home"
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { BasketPage } from './pages/BasketPage/BasketPage'
import { SignUpPage } from './pages/SignUpPage/SignUpPage'
import { LogInPage } from './pages/LogInPage/LogInPage'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { LikeContext, LikeProvider } from './components/LikeContext/LikeContext'
import { LikedProductsPage } from './pages/LikedProductsPage/LikedProductsPage'


function App() {
  const { register, handleSubmit, watch, reset, formState } = useForm({
    mode: 'onChange'
  });
  const [filterData, setfilterData] = useState("")
  const onSubmit1 = (data) => {
    console.log('Form data:', data);
    setfilterData(data.search1);
    reset();
  };
  const onSubmit2 = (data) => {
    console.log('Form data:', data);
    setfilterData(data.search2);
    reset();
  };
  console.log(filterData)
  return (
    <BrowserRouter>
      <LikeProvider>
        <Header onSubmit2={onSubmit2} onSubmit1={onSubmit1} />
        <Routes>
          <Route path="/" element={<Home filterData={filterData} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Login" element={<LogInPage />} />
          <Route path="/liked" element={<LikedProductsPage/>}/>
        </Routes>
        <Footer />
      </LikeProvider>
    </BrowserRouter>
  )
}

export default App
