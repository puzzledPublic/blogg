import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import PostList from "../components/postList"

export default function Index({ data }) {
  const { nodes } = data.allMarkdownRemark
  return (
    <>
      <Layout>
        <Nav />
        <PostList nodes={nodes} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`
