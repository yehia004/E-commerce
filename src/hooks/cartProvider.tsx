import  { useState } from 'react';
import type { ReactNode } from 'react';
import { CartContext } from './CartContext';
import type { CartItem} from './cartTypes';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => setCartItems((prev) => [...prev, item]);
  const removeFromCart = (id: string) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};