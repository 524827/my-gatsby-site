import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import styled from "styled-components";
import LoadingGrid from "../components/LoadingGrid";
import SEO from "../components/SEO";

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const SinglePizza = ({ data }) => {
  const pizza = data.contentfulPizzas;
  // debugger
  // console.log(data);
  return (
    <>
      <SEO title={pizza.name} image={pizza.image?.fluid?.src}/>
      <PizzaGrid>
        {pizza.image.fluid ? (
          <Img fluid={pizza.image.fluid} />
        ) : (
          <LoadingGrid count={1} />
        )}

        <div>
          <h2 className="mark">{pizza.name}</h2>
          <ul>
            {pizza.toppings.map((topping) => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul>
        </div>
      </PizzaGrid>
    </>
  );
};

export default SinglePizza;

export const query = graphql`
  query ($slug: String!) {
    contentfulPizzas(slug: { eq: $slug }) {
      id
      name
      toppings {
        name
        id
        vegetarian
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
