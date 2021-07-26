// import { Typography } from "@material-ui/core";
import React from "react";

import Footer from "../Footer";
import GlobalStyles from "../../styles/GlobalStyles";
import Typography from "../../styles/Typography";
import Navigation from "../Navigation";

import { ContentStyles, SiteBorderStyle } from "./StyledComponent";

const Layout = ({ children }) => {
  // const children = props;

  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyle>
        <ContentStyles>
          <Navigation />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyle>
    </>
  );
};

export default Layout;
