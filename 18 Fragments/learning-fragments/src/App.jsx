import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  // let foodItem = [];
  let foodItem = ["dal", "Green vegetable", "rota", "salad", "milk"];
  // let emptyValue = foodItem.length === 0 ? <h3>I am still hungry.</h3> : null;

  // if (foodItem.length === 0) {
  //   return <h3>I am still hungry.</h3>;
  // }
  return (
    <>
      <h1>Healthy food</h1>
      {/* {emptyValue} */}
      <ErrorMessage AllItems={foodItem}></ErrorMessage>
      <FoodItems AllItems={foodItem}></FoodItems>
    </>
  );
}

export default App;
