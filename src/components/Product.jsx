export default function Product({ meal, price, description, image }) {
  return (
    <div className="meal-item bg-black rounded-3xl overflow-hidden text-center shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
      <article className="h-full flex flex-col justify-between">
        <img
          className="w-full h-80 object-cover"
          src={"http://localhost:3000/" + image}
          alt={meal}
        />
        <h3 className="font-bold text-xl mx-0 my-3">{meal}</h3>
        <p
          className=" meal-item-price inline-block text-yellow-400 text-base font-bold px-8 py-2 m-0 rounded bg-green-950
        "
        >
          {price}
        </p>
        <p className="m-4">{description}</p>
        <button className="meal-item-actions mb-6">Add to Cart</button>
      </article>
    </div>
  );
}
