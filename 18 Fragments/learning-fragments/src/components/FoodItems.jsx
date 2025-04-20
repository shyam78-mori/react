import Item from "./Item";

function FoodItems({ AllItems }) {
  // let foodItem = ["dal", "Green vegetable", "rota", "salad", "milk"];
  return (
    <ul className="list-group">
      {AllItems.map((item) => (
        <Item key={item} Food={item}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
