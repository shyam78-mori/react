import style from "./Item.module.css";
function Item(props) {
  return (
    <>
      <li className={`${style["kd-item"]}list-group-item `}>
        <span className={style["kd--item"]}>{props.Store}</span>
      </li>
    </>
  );
}
export default Item;
