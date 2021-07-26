import React from "react";
import Img from "gatsby-image";

import { PizzaMenuItems } from "../../StyledComponent";
import formateMoney from "../../../../utils/formateMoney";
import calculatePizzaPrice from "../../../../utils/calculatePizzaPrice";

const PizzaOrder = ({ order, pizzas, removeFromOrder }) => {
  return (
    <>
      {order.map((singlePizza, index) => {
        const pizza = pizzas.nodes.find((item) => item.id === singlePizza.id);
        return (
          <PizzaMenuItems>
            <Img fluid={pizza.image.fluid}/>
            <h2>{pizza.name}</h2>
            <p>{formateMoney(calculatePizzaPrice(pizza.price, singlePizza.size))}</p>
          </PizzaMenuItems>
        );
      })}
    </>
  );
};

export default PizzaOrder;
