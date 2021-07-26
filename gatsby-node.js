const path = require("path");
const fetch = require("isomorphic-fetch");

async function turnPizzasIntoPages({ graphql, actions }) {

  const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
  const { data } = await graphql(`
    query {
      pizzas: allContentfulPizzas {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `);


  data.pizzas.edges.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.node.slug}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.node.slug,
      },
    });
  });
}


async function turnCountryIntoPages({ graphql, actions }) {
  const countryTemplate = path.resolve("./src/templates/Country.js");
  const { data } = await graphql(`
    query {
      countries: allCountries {
        nodes {
          id
          name
        }
      }
    }
  `);

  data.countries.nodes.forEach((country) => {
    actions.createPage({
      path: `country/${country.id}`,
      component: countryTemplate,
      context: {
        id: country.id,
      },
    });
  });
}



async function turningToppingsIntoPages({ graphql, actions }) {
  const toppingTemplate = path.resolve("./src/pages/pizzas.js");

  const { data } = await graphql(`
    query {
      toppings: allContentfulTopping {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `);

  data.toppings.edges.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.node.name}`,
      component: toppingTemplate,
      context: {
        topping: topping.node.name,
        toppingRegex: `/${topping.node.name}/`,
      },
    });
  });
}

async function fetchCountriesAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch("https://api.sampleapis.com/countries/countries");
  const countries = await res.json();
  console.log(countries[0]);
  const nodeContent = JSON.stringify(countries);
  for (const country of countries) {
    const nodeMeta = {
      id: createNodeId(`country-${country.id}`),
      parent: null,
      children: [],
      internal: {
        type: "Countries",
        mediaType: "application/json",
        content: nodeContent,
        contentDigest: createContentDigest(country),
      },
    };
    actions.createNode({
      ...country,
      ...nodeMeta,
    });
  }
}

exports.sourceNodes = async (params) => {
  await Promise.all([fetchCountriesAndTurnIntoNodes(params)]);
};

async function turningCountriesIntoPages({ graphql, actions }) {
  const {data} = await graphql(`
    query {
      countries: allCountries {
        totalCount
        nodes {
          id
          name
        }
      }
    }
  `);
  // console.log(data)
   const pageSize = 12;
   const pageCount = Math.ceil(data.countries.totalCount / pageSize);
  //  console.log(
  //    `There are ${data.countries.totalCount} total people. And we have ${pageCount} pages with ${pageSize} per page`
  //  );

   Array.from({ length: pageCount }).forEach((_, i) => {
    //  console.log(`Creating page ${i}`);
     actions.createPage({
       path: `/countries/${i + 1}`,
       component: path.resolve('./src/pages/countries.js'),
       context: {
         skip: i * pageSize,
         currentPage: i + 1,
         pageSize,
       },
     });
   });
}

exports.createPages = async (params) => {

  await Promise.all([
    turnPizzasIntoPages(params),
    turningToppingsIntoPages(params),
    turningCountriesIntoPages(params),
    turnCountryIntoPages(params)
  ]);
  // await turnPizzasIntoPages(params);
};
