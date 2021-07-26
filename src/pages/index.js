import { navigate } from "gatsby-link";
import * as React from "react";
import Layout from "../components/Layout";

import LoadingGrid from "../components/LoadingGrid";
// import { Link } from "gatsby";
// import Layout from "../components/Layout";

const IndexPage = () => {

   React.useEffect(()=>{
     navigate('/pizzas', {replace: true});
   })

  return (
    <>
    <Layout>
    <LoadingGrid count={10}/>
    </Layout>
    </>
  );
};

export default IndexPage;
