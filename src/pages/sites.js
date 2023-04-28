import React from "react"
import Layout from "../components/layout"
import FullWidthRow from "../components/FullWidthRow"
import Sites from "../components/Sites"
import "../styles/global.scss"

const AllSites = () => {
  return (
    <Layout>
      <h1 className="post-title">Sites</h1>
      <FullWidthRow component={Sites} />
    </Layout>
  )
}

export default AllSites

export { Head } from "../components/Head"
