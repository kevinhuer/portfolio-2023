import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import FullWidthRow from "../components/FullWidthRow"

import "../styles/global.scss"

const Main = () => {
  return (
    <div className="home-page-layout">
      <Layout>
        <h1 className="hidden-title">
          Kevin Huer - Creator of websites and digital assets
        </h1>
        <FullWidthRow>
          <Banner />      
          </FullWidthRow>
      </Layout>
    </div>
  )
}

export default Main

export { Head } from "../components/Head"
