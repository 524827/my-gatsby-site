import { graphql } from "gatsby";
import React from "react";
import CountriesList from "../components/Countries";

const CountriesPage = ({ data, pageContext }) => {
  // debugger;
  return <CountriesList pageContext={pageContext} data={data} />;
};

export default CountriesPage;

export const query = graphql`
  query($skip: Int=0, $pageSize: Int=12) {
    countries: allCountries(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        capital
        media {
          flag
        }
        currency
        population
      }
    }
  }
`;
