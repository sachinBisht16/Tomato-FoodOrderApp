import { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    async function fetchItems() {
      const data = await fetch("http://localhost:3000/meals");
      const response = await data.json();
      console.log(response);
      setFoodItems(response);
    }

    fetchItems();
  }, []);

  return (
    <>
      <ul
        className="w-11/12 max-w-6xl list-none mt-8 mb-8 ml-auto mr-auto p-4 grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))]"
        id="meals"
      >
        {foodItems.map((meal) => (
          <li key={meal.id}>
            <Product
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
