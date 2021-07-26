import { Link } from "gatsby";
import React from "react";
import Pagination from "../Pagination";
import { CountryGridStyles, SingleCountryStyles } from "./StyledComponent";

const ContriesList = ({ data, pageContext }) => {
  // console.log(data);
  return (
    <>
      <Pagination
        pageSize={12}
        totalCount={data.countries.totalCount}
        currentPage={pageContext.currentPage || 1}
        // skip={pageContext.skip}
        base="/countries"
      />
      <CountryGridStyles>
        {data.countries.nodes.map((country) => {
          return (
            <Link to={`/country/${country.id}`} key={country.id}>
              <SingleCountryStyles key={country.id}>
                <img src={country.media.flag} alt={country.name} />
                <h3>{country.name}</h3>
              </SingleCountryStyles>
            </Link>
          );
        })}
      </CountryGridStyles>
    </>
  );
};

export default ContriesList;
