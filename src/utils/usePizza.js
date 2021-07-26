import { useState } from "react";

export function usePizza({ pizzas, inputs }) {
  const [orders, setOrders] = useState([]);

  const addToOrder = (pizzaOrder) => {
    setOrders([...orders, pizzaOrder]);
  };

  const removeFromOrder = (index) => {
    // console.log(index);
    // const filterOrder  = orders.filter(item=> )
    const filterData = [...orders];
    filterData.splice(index, 1);
    // console.log(filterData)
    setOrders([
      ...filterData
    ]);
  };

  return {
    orders,
    addToOrder,
    removeFromOrder,
  };
}
