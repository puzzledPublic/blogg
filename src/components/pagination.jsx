import React from "react"
import tw from "twin.macro"
import PageButton from "./pageButton"

export default function Pagination({
  firstPageLink,
  baseLink,
  numPages,
  currentPage,
}) {
  const startNum = currentPage - 2 > 0 ? currentPage - 2 : 1
  const endNum = currentPage + 2 <= numPages ? currentPage + 2 : numPages
  const displayLen = endNum - startNum + 1

  const prevLink =
    currentPage === 2 ? firstPageLink : `${baseLink}/${currentPage - 1}`
  const nextLink = `${baseLink}/${currentPage + 1}`

  return (
    <div css={tw`flex justify-center items-center`}>
      <ul css={tw`flex`}>
        <PageButton
          disable={currentPage === 1}
          link={prevLink}
          displayName={"prev"}
        />
        {Array.from({ length: displayLen }).map((_, i) => (
          <PageButton
            key={i}
            link={i === 0 ? firstPageLink : `${baseLink}/${i + 1}`}
            displayName={i + 1}
          />
        ))}
        <PageButton
          disable={currentPage === numPages}
          link={nextLink}
          displayName={"next"}
        />
      </ul>
    </div>
  )
}
