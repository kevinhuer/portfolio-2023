import React from "react"
import { Link } from "gatsby"
import HomeAbout from "../components/HomeAbout"
import Layout from "../components/layout"
import Designs from "../components/Designs"
import FullWidthBanner from "../components/FullWidthBanner"
import "../styles/global.scss"
import Sites from "../components/Sites"

const Main = () => {
  return (
    <div className="home-page-layout">
      <Layout>
        <FullWidthBanner id={"home-banner-main"}>
          <div className="home-banner-cta">
            <h2>Beautiful, custom website design and delivery</h2>
            <p>
              I create websites for Toronto based businesses and organizations
              looking to put their best foot forward in the digital world.
            </p>
            <Link className="home-banner-btn" to={"/#recent-design-work"}>
              Recent design work
            </Link>
            <Link className="home-banner-btn" to={"/#recent-client-work"}>
              Recent client work
            </Link>
          </div>
        </FullWidthBanner>
        <div id="main">
          <HomeAbout />
          <Designs />
          <Sites />
        </div>
      </Layout>
    </div>
  )
}

export default Main