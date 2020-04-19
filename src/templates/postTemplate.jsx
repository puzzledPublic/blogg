import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import tw from "twin.macro"
import { css } from "@emotion/core"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <article css={tw`py-4`}>
        <header>
          <h2 css={tw`font-bold text-lg md:text-2xl text-gray-900`}>
            {post.frontmatter.title}
          </h2>
          <time css={tw`block mb-4 text-gray-700`}>
            {post.frontmatter.date}
          </time>
        </header>
        <section
          className="markdown-body box-border"
          css={css`
            & li {
              list-style-type: disc;
            }
          `}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
