import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import {ToppingsStyles} from './StyledComponent';

function countPizzasInToppings(pizzas) {
  const counts = pizzas
    .map((pizza) => pizza.node.toppings)
    .flat()
    .reduce((acc, topping) => {
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

const ToppingsFilter = () => {
  const { pizzas } = useStaticQuery(graphql`
    query {
      toppings: allContentfulTopping {
        nodes {
          name
          vegetarian
          id
        }
      }
      pizzas: allContentfulPizzas {
        edges {
          node {
            toppings {
              name
              id
            }
          }
        }
      }
    }
  `);

  const toppingsWithCounts = countPizzasInToppings(pizzas.edges);
  // console.log(toppingsWithCounts);

  return <ToppingsStyles>
      {
          toppingsWithCounts.map(topping=>(
               <Link to={`/topping/${topping.name}`} key={topping.id}>
                <span className="name">{topping.name}</span>
                <span className="count">{topping.count}</span>
               </Link>
          ))
      }
  </ToppingsStyles>;
};  

export default ToppingsFilter;
