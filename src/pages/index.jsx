import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import PostList from "../components/postList"
import Pagination from "../components/pagination"

export default function Index({ data }) {
  const { nodes, totalCount } = data.allMarkdownRemark
  const numPages = parseInt(
    Math.ceil(totalCount / data.site.siteMetadata.postsPerPage)
  )
  return (
    <>
      <Layout>
        <Nav />
        <PostList nodes={nodes} />
        <Pagination
          firstPageLink={"/"}
          baseLink={`/category/all`}
          numPages={numPages}
          currentPage={1}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
      skip: 0
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        excerpt
        fields {
          slug
        }
      }
    }
    site {
      siteMetadata {
        postsPerPage
      }
    }
  }
`
