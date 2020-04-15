import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import PostList from "../components/postList"

export default function BlogPostList({ pageContext }) {
  const { nodes } = pageContext
  return (
    <Layout>
      <Nav />
      <PostList nodes={nodes} />
    </Layout>
  )
}
