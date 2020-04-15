import React from "react"
import tw from "twin.macro"
import {Link} from "gatsby"

export default function Header() {
  return (
    <header
      style={{ borderBottomWidth: "1px", borderBottomColor: "lavender" }}
      css={tw`flex justify-between items-center fixed top-0 left-0 right-0 z-10 md:px-8 md:py-4 md:h-16 px-4 h-12`}
    >
      <Link to="/" css={tw`font-bold text-base md:text-lg`}>
        puzzle.dev
      </Link>
      <Link to="/about" css={tw`text-base md:text-lg`}>
        about
      </Link>
    </header>
  )
}
