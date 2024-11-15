import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};
const notify = () => {
  toast("Item Successfully Added To Cart !", {
    autoClose: 1000,
    position: "top-center",
    type: "success",
  });
};
const notifyfail = () => {
  toast("Sorry sir Item Out Of Stock !", {
    autoClose: 1000,
    position: "top-center",
    type:"error",
  });
};
const notify_widdh = () => {
  toast("Item Successfully Added To Your Wishlist !", {
    autoClose: 1000,
    position: "top-center",
    type: "success",
  });
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.some(
        (item) => item.product_id === product.product_id
      );
      if (!exists && product.availability) {
        notify();
        return [...prev, product];
      } else if (!product.availability) {
        notifyfail();
      }
      return prev;
    });
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some(
        (item) => item.product_id === product.product_id
      );
      if (!exists) {
        notify_widdh();
        return [...prev, product];
      }
      return prev;
    });
  };
  const removeFromCart = (product) => {
    setCart((prev) =>
      prev.filter((item) => item.product_id !== product.product_id)
    );
  };

  const removeFromWishlist = (product) => {
    setWishlist((prev) =>
      prev.filter((item) => item.product_id !== product.product_id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        clearCart,
        setCart,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};
