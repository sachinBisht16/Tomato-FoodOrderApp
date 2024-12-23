import { useRef, useState } from "react";

import Products from "./components/Products";
import CartModal from "./components/CartModal";

function App() {
  const cartRef = useRef();
  const [cart, setCart] = useState([]);

  function addToCartHandler(item) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }

  function showCartHandler() {
    cartRef.current.showModal();
  }

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <header
        className="flex justify-between align-center pt-12 pb-12 pl-80 pr-80"
        id="main-header"
      >
        <div className="flex gap-2 " id="title">
          <img
            className="w-12 h-12 rounded-full "
            src="src\assets\logo.jpg"
            alt="Logo"
          />
          <h1 className="flex m-auto font-normal font">REACTFOOD</h1>
        </div>
        <button
          className="text-yellow-400 font-medium"
          onClick={showCartHandler}
        >
          CART({cartItemCount})
        </button>
      </header>

      <Products addToCart={addToCartHandler} />
      <CartModal ref={cartRef} cartItems={cart} />
    </>
  );
}

export default App;
