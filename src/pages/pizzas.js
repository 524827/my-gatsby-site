import React from "react";
import { graphql } from "gatsby";
// import {GatsbyImage} from 'gatsby-plugin-image';

// import Layout from "../components/Layout";
import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter";
import LoadingGrid from "../components/LoadingGrid";
import SEO from "../components/SEO";

const PizzasPage = ({ data, pageContext }) => {
  // console.log(pageContext);
  const allPizzas = data.pizzas.nodes;
  return allPizzas ? (
    <>
      <SEO
        title={
          pageContext?.topping
            ? `Pizzas with ${pageContext.topping}`
            : "All pizzas"
        }
      />
      <ToppingsFilter />
      <PizzaList pizzasList={allPizzas} />
    </>
  ) : (
    <LoadingGrid count={10} />
  );
};

export default PizzasPage;

export const query = graphql`
  query pizzaQuery($toppingRegex: String) {
    pizzas: allContentfulPizzas(
      filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
    ) {
      nodes {
        name
        id
        price
        slug
        toppings {
          name
        }
        image {
          fluid(maxWidth: 500, cornerRadius: 10) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
