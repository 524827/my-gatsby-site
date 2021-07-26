import { useState } from "react";

export function usePizza({ pizzas, inputs }) {
  const [orders, setOrders] = useState([]);

  const addToOrder = (pizzaOrder) => {
    setOrders([...orders, pizzaOrder]);
  };

  const removeFromOrder = (index) => {
    setOrders({
      ...orders.slice(0, index),
      ...orders.slice(index + 1),
    });
  };

  return {
    orders,
    addToOrder,
    removeFromOrder,
  };
}
