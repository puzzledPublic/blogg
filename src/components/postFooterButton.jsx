import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

export default function PostFooterButton({ postNode, direction }) {
  if (!postNode) {
    return null
  }

  const link = `/posts/${postNode.fields.slug}`
  const title = postNode.frontmatter.title
  const dirString = direction === "next" ? "다음글" : "이전글"
  const dirCss = [
    tw`rounded hover:bg-gray-100 focus:bg-gray-100 p-4 cursor-pointer text-gray-900 hover:text-gray-900 focus:text-gray-900 w-1/2`,
  ]
  dirCss.push(direction === "next" ? tw`text-right` : tw`text-left`)
  return (
    <Link css={dirCss} to={link}>
      <p css={tw`text-sm`}>{dirString}</p>
      <p css={tw`font-bold`}>{title}</p>
    </Link>
  )
}
