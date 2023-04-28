import React from "react"
import AboutContent from "../components/AboutContent"
import Layout from "../components/layout"
import FixedWidthRow from "../components/FixedWidthRow"

import "../styles/global.scss"

const About = () => {
  return (
    <Layout>
      <h1 className="hidden-title">About</h1>
      <FixedWidthRow maxWidth={`800px`}>
        <AboutContent />
      </FixedWidthRow>
    </Layout>
  )
}

export default About

export { Head } from "../components/Head"
