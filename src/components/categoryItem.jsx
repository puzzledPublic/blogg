import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

export default function CategoryItem({ totalCount, category }) {
  return (
    <li css={tw`mr-2 last:mr-0`} key={category}>
      <Link
        to={category === "all" ? `/` : `/category/${category}`}
        activeStyle={{backgroundColor: "#90cdf4", color: "white"}}
        css={tw`rounded px-2 py-1 text-sm outline-none focus:shadow-outline`}
      >
        {`${category} (${totalCount})`}
      </Link>
    </li>
  )
}
