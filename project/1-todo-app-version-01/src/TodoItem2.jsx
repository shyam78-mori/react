function TodoItem2() {
  let TodoName = "hifi";
  let TodoDate = "14/01/2025";
  return (
    <div className="container text-start ">
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
export default TodoItem2;
