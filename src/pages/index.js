import React from "react"
import { Link } from "gatsby"
import HomeAbout from "../components/HomeAbout"
import Layout from "../components/layout"
import Designs from "../components/Designs"
import FullWidthBanner from "../components/FullWidthBanner"
import Sites from "../components/Sites"
import ContactForm from "../components/ContactForm"
import "../styles/global.scss"

const Main = () => {
  return (
    <div className="home-page-layout">    
      <Layout>
      <h1 className="hidden-title">Kevin Huer - Creator of websites and digital assets</h1>
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
          <ContactForm />
        </div>
   
      </Layout>
    </div>
  )
}

export default Main

export {Head} from '../components/Head';