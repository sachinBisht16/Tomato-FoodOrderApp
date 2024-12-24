import { useEffect, useState } from "react";
import Product from "./Product";

export default function Products({ addToCart }) {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const data = await fetch("http://localhost:3000/meals");
      const response = await data.json();

      setFoodItems(response);
    }

    fetchItems();
  }, []);

  return (
    <>
      <ul
        className="w-full sm:px-4 gap-2 max-w-6xl list-none my-6 py-4 sm:mx-auto grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))]"
        id="meals"
      >
        {foodItems.map((meal) => (
          <li key={meal.id}>
            <Product
              addToCart={addToCart}
              id={meal.id}
              meal={meal.name}
              price={meal.price}
              description={meal.description}
              image={meal.image}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
