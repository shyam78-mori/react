function AddTodo() {
  return (
    <div className="container text-start">
      <div className="row row-1">
        <div className="col-6">
          <input type="text" placeholder="enter todo text" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success btn-1 ">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
