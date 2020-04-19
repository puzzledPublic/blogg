import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import PostList from "../components/postList"
import { graphql } from "gatsby"
import Pagination from "../components/pagination"

export default function BlogPostList({ pageContext, data }) {
  const { numPages, currentPage, category } = pageContext

  const categoryLink = category === "*" ? "all" : category
  const firstPageLink = category === "*" ? "/" : `/category/${categoryLink}`
  const baseLink =
    category === "*" ? `/category/all` : `/category/${categoryLink}`

  return (
    <Layout>
      <Nav />
      <PostList nodes={data.allMarkdownRemark.nodes} />
      <Pagination
        firstPageLink={firstPageLink}
        baseLink={baseLink}
        numPages={numPages}
        currentPage={currentPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query($category: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { glob: $category } } }
      limit: $limit
      skip: $skip
    ) {
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
`
