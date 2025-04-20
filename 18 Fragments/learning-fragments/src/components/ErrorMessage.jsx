function ErrorMessage({ AllItems }) {
  // let foodItem = ["dal", "Green vegetable", "rota", "salad", "milk"];

  return <>{AllItems.length === 0 && <h3>I am still hungry.</h3>}</>;
}

export default ErrorMessage;
