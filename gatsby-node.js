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
      allPostByCategory: allMarkdownRemark {
        group(field: frontmatter___category) {
          category: fieldValue
          nodes {
            id
          }
        }
      }

      allMarkdownRemark {
        totalCount
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

  const postsPerPage = 6;

  result.data.allPostByCategory.group.forEach(({category, nodes}) => {
    const numPages = parseInt(Math.ceil(nodes.length / postsPerPage));
    Array.from({length: numPages}).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/${category}` : `/category/${category}/${i + 1}`,
        component: path.resolve("./src/templates/postListTemplate.jsx"),
        context: {
          category: `${category}`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        }
      })
    });
  })

  const postTotalCount = result.data.allMarkdownRemark.totalCount;
  const numPages = parseInt(Math.ceil(postTotalCount / postsPerPage));
  Array.from({length: numPages - 1}).forEach((_, i) => {
    createPage({
      path: `/category/all/${i + 2}`,
      component: path.resolve("./src/templates/postListTemplate.jsx"),
      context: {
        category: "*",
        limit: postsPerPage,
        skip: (i + 1) * postsPerPage,
        numPages,
        currentPage: i + 2,
      }
    });
  });


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
