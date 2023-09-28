
import { useContext } from 'react';
import MyButton from '../Button/button.component';
import CartItem from '../CartItem/cart-item.components';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';


export const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const toggleNav = () => {
      return navigate('/checkout');
    }

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
        </div>
        <MyButton btnText='Go To Checkout' className='myBtn myBtn-primary' onClick={toggleNav}/>
    </div>
  )
}

export default CartDropdown;
