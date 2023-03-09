const path = require(`path`)
const chunk = require(`lodash/chunk`)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
//const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const designs = await getDesigns(gatsbyUtilities)
  const sites = await getSites(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (!designs.length || !sites.length) {
    return
  }

  // If there are posts, create pages for them

  await createIndividualDesignPostPages({ designs, gatsbyUtilities })
  await createIndividualSitePostPages({ sites, gatsbyUtilities })
}

const createIndividualDesignPostPages = async ({ designs, gatsbyUtilities }) =>
  Promise.all(
    designs.map(({ design, previous, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: design.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/design-post.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: design.id,
          // We also use the next and previous id's to query them and add links!
           previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )

const createIndividualSitePostPages = async ({ sites, gatsbyUtilities }) =>
  Promise.all(
    sites.map(({ site, previous, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: site.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/site-post.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: site.id,
           previousPostId: previous ? previous.id : null,
           nextPostId: next ? next.id : null,
        },
      })
    )
  )

async function getDesigns({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query Designs {
      allWpDesign {
        edges {
           previous {
             id
           }
          design: node {
            id
            uri
          }
           next {
             id
           }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpDesign.edges
}

async function getSites({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query Sites {
      allWpSite {
        edges {
           previous {
             id
           }
          site: node {
            id
            uri
          }
           next {
             id
           }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpSite.edges
}
