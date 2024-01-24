import React from 'react'
import Button from '../button/button'
import './cart.css'
import { totalPrice } from '../units/total-price'

const Cart = ({cartItems}) => {
  return (
    <div className='cart__container'>
        <p>Umumiy narx: {' '} ${totalPrice(cartItems)} </p>
        <Button 
        title={`${cartItems.length === 0 ? "Buyurtma" : "To'lov"}`}
        disable={cartItems.length === 0 ? true : false}
        type={'checkout'} 
        /> 
    </div>
  )
}

export default Cart