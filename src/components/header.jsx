import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"
import styled from "@emotion/styled"
const HeaderBlock = styled.header`
  ${tw`flex justify-between items-center fixed top-0 left-0 right-0 z-10 md:px-8 md:py-4 md:h-16 px-4 h-12`}
  border-bottom-width: 1px;
  border-bottom-color: lavender;
  backdrop-filter: blur(5px);
`

export default function Header() {
  return (
    <HeaderBlock>
      <Link to="/" css={tw`font-bold text-base md:text-lg`}>
        puzzle.dev
      </Link>
      <Link to="/about" css={tw`text-base md:text-lg`}>
        about
      </Link>
    </HeaderBlock>
  )
}
