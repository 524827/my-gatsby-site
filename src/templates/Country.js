import { graphql } from "gatsby";
import React from "react";

import styled from "styled-components";
import LoadingGrid from "../components/LoadingGrid";

const CountryGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const Country = ({ data }) => {
  return (
    <>
      <CountryGrid>
        {data.country.media.flag ? (
          <img src={data.country.media.flag} alt={data.country.name} />
        ) : (
          <LoadingGrid count={1} />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <h2>
            <span>Country Name: </span>
            <span className="mark">{data.country.name}</span>
          </h2>
          <h2>
            <span>Capital: </span>
            <span className="mark">{data.country.capital}</span>
          </h2>
          <h2>
            <span>Country Code: </span>
            <span className="mark">{data.country.phone}</span>
          </h2>
          <h2>
            <span>Population: </span>
            <span className="mark">{data.country.population}</span>
          </h2>
          <h2>
            <span>Currency: </span>
            <span className="mark">{data.country.currency}</span>
          </h2>

          {/* <ul>
            {pizza.toppings.map((topping) => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul> */}
        </div>
      </CountryGrid>
    </>
  );
};

export default Country;

export const query = graphql`
  query ($id: String!) {
    country: countries(id: { eq: $id }) {
      name
      id
      capital
      phone
      currency
      population
      media {
        flag
      }
    }
  }
`;
