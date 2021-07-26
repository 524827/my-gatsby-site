import { navigate } from "gatsby-link";
import * as React from "react";

import LoadingGrid from "../components/LoadingGrid";
// import { Link } from "gatsby";
// import Layout from "../components/Layout";

const IndexPage = () => {

   React.useEffect(()=>{
     navigate('/pizzas', {replace: true});
   })

  return (
    <>
     <LoadingGrid count={10}/>
    </>
  );
};

export default IndexPage;
