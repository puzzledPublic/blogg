import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

export default function PageButton({ disable, link, displayName }) {
  return (
    <li
      style={disable ? { cursor: "not-allowed" } : {}}
      css={tw`mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg`}
    >
      {disable ? (
        <span css={tw`mx-1 font-bold cursor-not-allowed text-gray-500`}>{displayName}</span>
      ) : (
        <Link to={link} css={tw`flex items-center font-bold`}>
          <span css={tw`mx-1`}>{displayName}</span>
        </Link>
      )}
    </li>
  )
}
