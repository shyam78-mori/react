function Random() {
  let number = Math.random() * 100;

  return (
    <h1 style={{ backgroundColor: "black", color: "white" }}>
      Random number is:- {Math.round(number)}
    </h1>
  );
}

export default Random;
