import './App.css'
import Home from './Home/home'
import Products from './Products/products'
import Register from './Register/register'
import Login from './Login/login'
import Cart from './Cart/cart'
import { Routes, Route } from 'react-router-dom'
import React from 'react'



function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
