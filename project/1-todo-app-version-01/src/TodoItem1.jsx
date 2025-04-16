function TodoItem1() {
  let TodoName = "hello";
  let TodoDate = "14/01/2025";
  return (
    <div className="container ">
      <div className="row row-1">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger btn-1">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
