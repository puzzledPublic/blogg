import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

export default function PageButton({ disable, link, displayName }) {
  return (
    <li
      style={disable ? { cursor: "not-allowed" } : {}}
      css={tw`mx-1 bg-gray-200 text-gray-700 hover:bg-blue-300 hover:text-gray-100 rounded-lg`}
    >
      {disable ? (
        <span css={tw`mx-1 inline-flex p-2 justify-center items-center font-bold cursor-not-allowed text-gray-500`}>{displayName}</span>
      ) : (
        <Link to={link} css={tw`inline-flex p-2 justify-center items-center font-bold`}>
          <span css={tw`mx-1`}>{displayName}</span>
        </Link>
      )}
    </li>
  )
}
