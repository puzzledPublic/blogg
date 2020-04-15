import React from "react"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import CategoryItem from "./categoryItem"

export default function Nav() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          totalCount
          category: fieldValue
        }
        totalCount
      }
    }
  `)

  return (
    <nav css={tw`py-4`}>
      <ul css={tw`flex mb-2`}>
        <CategoryItem
          totalCount={data.allMarkdownRemark.totalCount}
          category={"all"}
        />
        {data.allMarkdownRemark.group.map(({ totalCount, category }) => (
          <CategoryItem key={category} totalCount={totalCount} category={category} />
        ))}
      </ul>
    </nav>
  )
}
