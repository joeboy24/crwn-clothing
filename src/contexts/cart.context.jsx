import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // Modify cart item if exists
    if (existingCartItem) {
        return cartItems.map(
        (cartItem) => cartItem.id === productToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
        );
    }

    // Add cart item if not exists
    return [...cartItems, {...productToAdd, quantity: 1 }];

}

const removeCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === productToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem);
    }

    // if (window.confirm("This action will remove item from cart. Click ok to proceed")) { 
    //     return cartItems.filter(cartItem => cartItem.id != productToRemove.id)
    // }

    return cartItems;

}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    IncreseOrAddItemToCart: () => {},
    reduceProductQty: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);

    // Add Item
    const IncreseOrAddItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    useEffect(() => {
        // Set cart count
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        );
        setCartCount(newCartCount);

        // Set cart total
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + (cartItem.price * cartItem.quantity), 0
            );
        setCartTotal(newCartTotal);

    }, [cartItems])

    // Remove Item
    const reduceProductQty = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const removeCheckoutItem = (itemToRemove) => {
        const newCart = cartItems.filter(cartItem => cartItem.id != itemToRemove.id);
        setCartItems(newCart);
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, IncreseOrAddItemToCart, cartCount, cartTotal, reduceProductQty, removeCheckoutItem };
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}