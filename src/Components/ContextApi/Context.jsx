
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.some(item => item.product_id === product.product_id);
      if (!exists) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some(item => item.product_id === product.product_id);
      if (!exists) {
        return [...prev, product];
      }
      return prev;
    });
  };
  const removeFromCart = (product) => {
    setCart((prev) => prev.filter(item => item.product_id !== product.product_id));
  };
  
  const removeFromWishlist = (product) => {
    setWishlist((prev) => prev.filter(item => item.product_id !== product.product_id));
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
 
  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist, clearCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};