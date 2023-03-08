import React from 'react'
import { Navbar } from '../components/Navbar'
import './cart.css'

export const Cart = () => {
  return (
    <div className='cart-page-container'>
        <h1 className="cart-page-title">
            Cart
        </h1>
        <Navbar/>
    </div>
  )
}
