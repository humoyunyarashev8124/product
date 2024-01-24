import React, { useState } from 'react'
import './card.css'
import Button from '../button/button'

const Card = props => {
  const [count, setCount] = useState(0)
    const {Car, onAddItem, onRemoveItem} = props

    const handleIncrement = () => {
      setCount(prev => prev + 1)
      onAddItem(Car)
    }

    const handleDecrement = () => {
      setCount(prev => prev - 1)
      onRemoveItem(Car)
    }

  return (
    <div className='card'>
        <span className={`${count !== 0 ? 'card__badge' : 'card__badge-hidden'}`}>{count}</span>

        <div className="image__container">
          <img src={Car.Image} alt={Car.title} width={'100%'} height={'230px'} />
        </div>

        <div className='card__body'>
          <h2 className='card__title'>{Car.title}</h2>
          <div className="card__price">
              ${Car.price}
          </div>
        </div>

        <div className='hr'></div>

        <div className="btn__container">
          <Button title={'+'} onClick={handleIncrement} type={'add'} />
          {count !== 0 && (
            <Button title={'-'} onClick={handleDecrement} type={'remove'} />
          )}
        </div>

    </div>
  )
}

export default Card