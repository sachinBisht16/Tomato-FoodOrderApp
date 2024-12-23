export default function Product({ addToCart, ...item }) {
  return (
    <div className="meal-item bg-black rounded-3xl overflow-hidden text-center shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
      <article className="h-full flex flex-col justify-between">
        <img
          className="w-full h-80 object-cover"
          src={"http://localhost:3000/" + item.image}
          alt={item.meal}
        />
        <h3 className="font-bold text-xl mx-0 my-3">{item.meal}</h3>
        <p className=" meal-item-price inline-block text-yellow-400 text-base font-bold px-8 py-2 m-0 rounded bg-green-950">
          {item.price}
        </p>
        <p className="m-4">{item.description}</p>
        <button
          className="meal-item-actions mb-6"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </article>
    </div>
  );
}
