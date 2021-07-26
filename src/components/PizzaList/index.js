import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { PizzaGridStyle, PizzaStyle } from "./StyledComponent";

function SinglePizza({ pizza }) {
  return (
    <PizzaStyle>
      <Link to={`/pizza/${pizza.slug}`}>
        <h2 className="mark">{pizza.name}</h2>
      </Link>
      <p>{pizza.toppings.map((item) => item.name).join(", ")}</p>
      <div>
        <Img fluid={pizza.image.fluid} alt={pizza.name} />
      </div>
    </PizzaStyle>
  );
}

const PizzaList = ({ pizzasList }) => {
  //   debugger
  return (
    <PizzaGridStyle>
      {pizzasList.map((item, index) => {
        return <SinglePizza key={item.node.id} pizza={item.node} />;
      })}
    </PizzaGridStyle>
  );
};

export default PizzaList;
