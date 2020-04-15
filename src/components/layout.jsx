import React from "react"
import tw from "twin.macro"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        className="container"
        css={tw`mx-auto mt-16 px-4 md:mt-24 lg:max-w-3xl `}
      >
        {children}
      </main>
    </>
  )
}
