const sizes = {
  S: 0.5,
  M: 1,
  L: 1.5,
};

export default function calculatePizzaPrice(cents, PizzaSize) {
    // debugger
  return cents * sizes[PizzaSize];
}
