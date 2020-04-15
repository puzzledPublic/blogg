const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({ node, name: "slug", value: slug })
  }
}

// **Note:** The graphql function call returns a Promise
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allPostByCategory: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        group(field: frontmatter___category) {
          category: fieldValue
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
          }
        }
      }

      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allPostByCategory.group.forEach(({category, nodes}) => {
    createPage({
      path: `/category/${category}`,
      component: path.resolve("./src/templates/postListTemplate.jsx"),
      context: {
        category: `${category}`,
        nodes: nodes,
      },
    })
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: path.resolve("./src/templates/postTemplate.jsx"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
