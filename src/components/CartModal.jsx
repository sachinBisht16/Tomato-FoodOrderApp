import { forwardRef } from "react";

const CartModal = forwardRef(function CartModal({ cartItems }, ref) {
  const total = cartItems
    .reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
    .toFixed(2);

  return (
    <dialog
      ref={ref}
      className="w-4/12 h-72 rounded-2xl bg-slate-100 border-none p-4 box-content"
    >
      <header className="w-full h-1/5 p-2 font-bold text-2xl">Your Cart</header>
      <main className="w-full h-auto min-h-40 p-2 font-normal">
        {cartItems.length === 0 && <p>Cart is empty</p>}
        {cartItems.length !== 0 && (
          <ul className="w-full flex flex-col gap-1">
            {cartItems.map((item) => (
              <li
                className="w-full flex justify-between p-1 text-sm"
                key={item.id}
              >
                <span>
                  {item.meal} - {item.quantity} * $ {item.price}
                </span>

                <span>
                  <button className="text-white bg-black border-none px-2 rounded-3xl mx-1 font-normal">
                    +
                  </button>
                  {item.quantity}
                  <button className="text-white bg-black border-none px-2 rounded-3xl mx-1 font-normal">
                    -
                  </button>
                </span>
              </li>
            ))}
            <li className="w-full font-semibold flex justify-end pr-2">
              $ {total}
            </li>
          </ul>
        )}
      </main>
      <footer className="w-full h-1/5 flex justify-end">
        <button className="text-black bg-transparent mx-1 font-normal">
          Close
        </button>
        <button className="text-black bg-yellow-400 my-2 mx-1 p-2 rounded font-semibold ">
          Go to Checkout
        </button>
      </footer>
    </dialog>
  );
});

export default CartModal;
