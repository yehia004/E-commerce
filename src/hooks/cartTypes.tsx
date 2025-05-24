export interface CartItem {
  id: string;
  title: string;
  price: number;
  
}
//  properties as needed

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}