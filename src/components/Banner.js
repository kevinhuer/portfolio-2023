import React from "react"
import { Link } from "gatsby"
import "./Banner.scss"
import FixedWidthRow from "./FixedWidthRow"

const Banner = () => {
  return (
    <div className="banner">
      <FixedWidthRow>
      <div className="banner-container">
        <div className="banner-cta">
          <h2>Beautiful, custom website design and delivery</h2>
          <p>
            I create websites for Toronto based businesses and organizations
            looking to put their best foot forward in the digital world.
          </p>
          <div className="banner-actions">
            <Link className="banner-btn" to={"/designs"}>
              Recent design work
            </Link>
            <Link className="banner-btn" to={"/sites"}>
              Recent client work
            </Link>
          </div>
        </div>
        <div className="banner-deco"></div>
      </div>
      </FixedWidthRow>
    </div>
  )
}

export default Banner
