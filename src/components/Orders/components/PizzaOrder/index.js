import React from "react";
import Img from "gatsby-image";

import { PizzaMenuItems } from "../../StyledComponent";
import formatMoney from "../../../../utils/formateMoney";
import calculatePizzaPrice from "../../../../utils/calculatePizzaPrice";

const PizzaOrder = ({ order, pizzas, removeFromOrder }) => {
    // console.log(order);
  return (
    <>
      {order.map((singlePizza, index) => {
        const pizza = pizzas.nodes.find((item) => item.id === singlePizza.id);
        return (
          <PizzaMenuItems key={index}>
            <Img fluid={pizza?.image?.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, singlePizza.size))}
            </p>
            <button
              onClick={() => removeFromOrder(index)}
              type="button"
              className="remove"
            >
              {" "}
              &times;
            </button>
          </PizzaMenuItems>
        );
      })}
    </>
  );
};

export default PizzaOrder;
