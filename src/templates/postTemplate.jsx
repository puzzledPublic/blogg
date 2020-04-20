import { css } from "@emotion/core"
import { graphql } from "gatsby"
import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import PostFooterButton from "../components/postFooterButton"

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { prevPost, nextPost } = pageContext
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
            padding: 1em 0;
          `}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <div css={tw`mb-8 flex justify-between`}>
          <PostFooterButton direction="prev" postNode={prevPost} />
          <PostFooterButton direction="next" postNode={nextPost} />
        </div>
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
