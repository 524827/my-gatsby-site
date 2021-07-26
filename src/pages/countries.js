import { graphql } from "gatsby";
import React from "react";
import CountriesList from "../components/Countries";
import Layout from "../components/Layout";

const CountriesPage = ({ data, pageContext }) => {
  // debugger;
  return (
    <Layout>
      <CountriesList pageContext={pageContext} data={data} />;
    </Layout>
  );
};

export default CountriesPage;

export const query = graphql`
  query ($skip: Int = 0, $pageSize: Int = 12) {
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
