import { createContext, useState, useEffect, use } from "react";

import {all_products} from "../assets/data"

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState(all_products);
  const [token, setToken] = useState("");
const [isCartLoaded, setIsCartLoaded] = useState(false);

useEffect(() => {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    setCartItems(JSON.parse(savedCart));
  }
  setIsCartLoaded(true);
}, []);

useEffect(() => {
  if (!isCartLoaded) return;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems, isCartLoaded]);

  const addToCart = (productId) => {
    setCartItems((cartItems) => ({
      ...cartItems,
      [productId]: (cartItems[productId] || 0) + 1,
    }));

    
  }

  const removeFromCart = (productId, removeAll = false) => {
    setCartItems((cartItems) => {
      const updatedCart = { ...cartItems };
      if (removeAll || updatedCart[productId] === 1) {
        delete updatedCart[productId];
      } else {
        updatedCart[productId] -= 1;
      }
      return updatedCart;
    });
  }

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id,qty]) => {
      const product = products.find(item => item._id === id);
      if (product) {
        total += product.price * qty;
      }
      return total;
    }, 0);
  }
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const value = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
  }
 return <ShopContext.Provider value={value}>    {children}</ShopContext.Provider>;   
}

export default ShopProvider;