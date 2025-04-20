import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import GroupItem from "./components/GroupItem";
import "./App.css";

function App() {
  let cars = ["Mercedes", "audi", "jaguar", "jeep", "lamborghini"];
  // let cars = [];
  // if (cars.length === 0) {
  //   return <h3>soothing wrong</h3>;
  // }
  return (
    <>
      <h1 className="car-heading text-center ">vintage cars</h1>
      <ErrorMessage itemCar={cars}></ErrorMessage>
      <GroupItem itemCar={cars}></GroupItem>
    </>
  );
}

export default App;
