

import React, { useContext } from 'react'
import MyButton from '../../Components/Button/button.component';
import { CartContext } from '../../contexts/cart.context';

export const CheckoutItem = ({ checkoutItem }) => {
    const { imageUrl, name, price, quantity } = checkoutItem;
    
    const { IncreseOrAddItemToCart, reduceProductQty, removeCheckoutItem } = useContext(CartContext);
    const addProductToCart = () => IncreseOrAddItemToCart(checkoutItem);
    const removeProductFromCart = () => reduceProductQty(checkoutItem);
    const removeFunc = () => {
        if (window.confirm("Are you sure you want to delete item from cart?")) { 
            removeCheckoutItem(checkoutItem)
        }
    };

    


  return (
    <div className='checkout-item-container'>
        <div className='checkout-img-container'>
            <img src={imageUrl} />
        </div>
        <div className='checkout-child-item w-2/4'>{name}</div>
        <div className='flex w-1/4'>
            <div className='flex checkout-child-item w-1/3'>
                <span onClick={removeProductFromCart}>&nbsp;&nbsp; - &nbsp;</span>
                {quantity}
                <span onClick={addProductToCart}>&nbsp;&nbsp; + &nbsp;</span>
            </div>
            <div className='checkout-child-item w-1/3'>{price}</div>
            <div className='checkout-child-item w-1/3'>
                <MyButton btnText='Remove' type='button' onClick={removeFunc} className='myBtn myBtn-primary'/>
            </div>
        </div>
    </div>
  )
}
