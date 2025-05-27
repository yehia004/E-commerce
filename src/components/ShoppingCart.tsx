import { Link } from 'react-router-dom';
import { useCart } from '../hooks/cartHooks';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();
  console.log('cartItems:', cartItems);

  const removeItem = (id: string) => {
    removeFromCart(id);
  };

  return (
    <div
      className="bg-white w-72 min-h-9/12 border-xs shadow-lg flex flex-col p-6"
      style={{ position: 'fixed', top: '0', right: '5px', zIndex: 1000 }}
    >
      <h2 className="text-lg font-semibold items-start border-b-2 ">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <>
          <p className="p-4 text-xs font-light justify-center items-start ">
            Your shopping cart is empty.
          </p>
          <p className="p-2 text-xs font-light justify-center">
            Add items to your cart to see them here.
          </p>
        </>
      ) : (
        <ul className="w-full flex flex-col py-2.5">
          {cartItems.map((item) => (
            <li key={item.id} className="border-b py-2 px-4 flex flex-col align-center">
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:fill-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
            </li>
          ))}
        </ul>
      )}


      <Link to="/src/pages/Shop.tsx">
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#B88E2F',
            border: '1px solid #B88E2F',
            borderRadius: '5px',
            position: "absolute",
            top: "85%"
          }}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default ShoppingCart;