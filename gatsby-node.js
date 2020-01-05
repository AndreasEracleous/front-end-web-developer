/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter  
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create blog post pages.
  const posts = result.data.allMarkdownRemark.edges
  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    const prev = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.path,
        prev,
        next,
      }, // additional data can be passed via context
    })
  })
}
/*
const fetch = require("node-fetch")
const fs = require('fs');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const apiUrl = `https://cdnjs.cloudflare.com/ajax/libs/analytics.js/2.9.1/analytics.min.js`

  return (
    fetch(apiUrl)
    .then(res => {
      //const dest = fs.createWriteStream('./analytics.js');
      const dest = fs.createWriteStream(`${__dirname}/static/analytics.min.js`);
      console.log(dest)
      res.body.pipe(dest);
      })
  )
}
*/
