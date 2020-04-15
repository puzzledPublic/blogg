import React from "react"
import tw from "twin.macro"
import {Link} from "gatsby"

export default function PostList({ nodes }) {
  return (
    <ul css={tw`-mx-4`}>
      {nodes.map(node => (
        <li css={tw`mb-4`} key={node.fields.slug}>
          <Link
            to={`/posts/${node.fields.slug}`}
            css={tw`block rounded p-4 cursor-pointer outline-none hover:bg-gray-100 focus:bg-gray-100 focus:shadow-outline active:shadow-outline`}
          >
            <h2 css={tw`font-bold text-lg text-gray-900 md:text-2xl`}>
              {node.frontmatter.title}
            </h2>
            <time
              css={tw`block mb-4 text-gray-700`}
              dateTime={new Date(node.frontmatter.date).toISOString()}
            >
              {node.frontmatter.date}
            </time>
            <p css={tw`text-gray-800 leading-relaxed`}>{node.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
