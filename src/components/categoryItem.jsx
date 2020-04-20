import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

export default function CategoryItem({ totalCount, category, active }) {
  return (
    <li css={tw`mr-2 last:mr-0`} key={category}>
      <Link
        to={category === "all" ? `/` : `/category/${category}`}
        css={[
          tw`rounded px-2 py-1 text-sm outline-none focus:shadow-outline`,
          active ? tw`bg-blue-300 text-white` : null,
        ]}
      >
        {`${category} (${totalCount})`}
      </Link>
    </li>
  )
}
