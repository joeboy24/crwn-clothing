import { useContext } from 'react';
import MyButton from '../Button/button.component';
import './product-card.styles.scss';
import { CartContext } from '../../contexts/cart.context';


const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const { IncreseOrAddItemToCart } = useContext(CartContext);

    const addProductToCart = () => IncreseOrAddItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <MyButton btnText='Add To Cart' onClick={addProductToCart} className='myBtn myBtn-primary'/>
        </div>
    );
}


export default ProductCard