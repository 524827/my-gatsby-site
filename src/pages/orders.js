import { graphql } from "gatsby";
import React from "react";
import Orders from "../components/Orders";

const OrderPage = ({ data }) => {
  // console.log(data);
  return <Orders data={data} />;
};

export default OrderPage;

export const query = graphql`
  query {
    pizzas: allContentfulPizzas {
      nodes {
        name
        id
        price
        slug
        image {
          fluid(maxWidth: 200, cornerRadius: 10) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
