import Item from "./Item";

function GroupItem({ itemCar }) {
  return (
    <>
      <ul className="list-group">
        {itemCar.map((item) => (
          <Item key={item} Store={item}></Item>
        ))}
      </ul>
    </>
  );
}

export default GroupItem;
