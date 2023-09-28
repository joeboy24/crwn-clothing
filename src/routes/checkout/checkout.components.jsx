
import React, { useContext } from 'react'
import { FaBeer, FaTrash } from 'react-icons/fa'
import { Bs0Circle, BsTrashFill } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import { CheckoutItem } from './checkout-item.components'
import './checkout.styles.scss'

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div>
      {cartItems.map(cartItem => (
        <div key={cartItem.id}>
          <h1><CheckoutItem checkoutItem={cartItem} /></h1>
        </div>
      ))}
      <h1>Total: ${cartTotal}</h1>
      {/* <h2><FaBeer /><BsTrashFill /></h2> */}
    </div>
  )
}
