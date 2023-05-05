import React from "react"
import Layout from "../components/layout"
import FullWidthRow from "../components/FullWidthRow"
import Designs from "../components/Designs"
import "../styles/global.scss"

const AllDesigns = () => {
  return (
    <Layout className="Design_Layout">
      <h1 className="post-title">Designs</h1>
      <FullWidthRow component={Designs}/>    
    </Layout>
  )
}

export default AllDesigns

export { Head } from "../components/Head"
