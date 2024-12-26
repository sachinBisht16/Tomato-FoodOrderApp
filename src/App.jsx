import { useRef, useState, useEffect, useCallback } from "react";

import Products from "./components/Products";
import CartModal from "./components/CartModal";

function App() {
  const cartRef = useRef();
  const [cart, setCart] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handler(e) {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target) &&
        e.target.id !== "cart"
      ) {
        closeModalHandler();
      }
    }
    if (isOpen) document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isOpen]);

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
    setIsOpen(true);
  }

  function closeModalHandler() {
    cartRef.current.close();
    setIsOpen(false);
  }

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="w-2/3 mx-auto bg-gray-50 shadow-2xl shadow-black flex flex-col items-center">
      <header
        className="flex w-full justify-between px-2 sm:px-16 items-center pt-12 pb-12 bg-gray-950"
        id="main-header"
      >
        <div className="flex gap-2" id="title">
          <img
            className="w-14 h-14 rounded-full bg-gray-500"
            src="src\assets\logo.jpg"
            alt="Logo"
          />
          <h1 className="flex m-auto font-normal text-xl">REACTFOOD</h1>
        </div>
        <button
          id="cart"
          className="text-yellow-400 font-medium text-xl"
          onClick={showCartHandler}
        >
          CART({cartItemCount})
        </button>
      </header>

      <Products addToCart={addToCartHandler} />
      <CartModal
        ref={cartRef}
        closeModal={closeModalHandler}
        cartItems={cart}
      />
    </div>
  );
}

export default App;
