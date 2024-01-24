import React, { useState } from 'react'
import { getData } from './constants/db'
import Card from './components/card/card'
import "./App.css"
import Cart from './components/cart/cart'

const car = getData()

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const onAddItem = item => {
    const existItem = cartItems.find(c => c.id == item.id)
    console.log(existItem);
    if(existItem) {
      const newData = cartItems.map(
        c => c.id == item.id ? {...existItem, quantity: existItem.quantity + 1
        } : c)
        setCartItems(newData)
        console.log(newData);
    }else {
      const newData = [...cartItems, {...item, quantity: 1}]
      setCartItems(newData)
      console.log("ishlamadi");
    }
  }

  const onRemoveItem = item => {
    const existItem = cartItems.find(c => c.id == item.id)
    console.log(existItem);
    if(existItem.quantity == 1) {
      const newData = cartItems.filter(c => c.id !== existItem.id)
      setCartItems(newData)
      console.log(newData);
    }else {
      const newData = cartItems.map(c => c.id == existItem.id ? {...existItem, quantity: existItem.quantity - 1} : c)
      setCartItems(newData)
    }
  }
  return (
    <div>
      <h1 className='heading'>GM AUTO</h1>
      <Cart cartItems={cartItems} />
      <div className='cards__container'>
        {car.map(car => (
          <>
            <Card key={car.id} Car={car} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
          </>
        ))}
      </div>
    </div>
  )
}

export default App