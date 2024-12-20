import Products from "./components/Products";

function App() {
  return (
    <>
      <header
        className="flex justify-between align-center pt-12 pb-12 pl-80 pr-80"
        id="main-header"
      >
        <h1 id="title">
          <img
            className="w-12 h-12 rounded-full"
            src="src\assets\logo.jpg"
            alt=""
          />
          REACTFOOD
        </h1>
        <button>CART({"cart-count"})</button>
      </header>

      <Products />
    </>
  );
}

export default App;
