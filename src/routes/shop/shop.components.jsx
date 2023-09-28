import { useContext } from 'react';
import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../../Components/ProductCard/product-card.component';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/> 
            ))}
        </div>
    );
}

export default Shop;