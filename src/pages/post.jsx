import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Input = styled.input`
  ${tw`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-5`}
`

export default function Post() {
  const [data, setData] = useState("")
  return (
    <Layout>
      <div>
        <Input
          type="email"
          placeholder="jane@example.com"
          onChange={e => setData(e.target.value)}
        />
        <div>{data}</div>
        <input
          css={tw`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal`}
          placeholder="ran"
        />
      </div>
      <div css={tw`md:flex`}>
        <div css={tw`md:flex-shrink-0`}>
          <img
            css={tw`rounded-lg md:w-56`}
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Woman paying for a purchase"
          />
        </div>
        <div css={tw`mt-4 md:mt-0 md:ml-6`}>
          <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
            Marketing
          </div>
          <Link
            css={tw`block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline`}
          >
            Finding customers for your new business
          </Link>
          <p css={tw`mt-2 text-gray-600`}>
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </Layout>
  )
}
