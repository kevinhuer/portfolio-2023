import React from "react"
import "./FullWidthBanner.scss"

const FullWidthBanner = ({ id, children }) => {
  return (
    <div id={id} className="full-width-banner">
            <div className="full-width-banner-children">{children}</div>
      <span className="home-banner-pattern"></span>
      <span className="home-banner-mask"></span>
      <span className="home-banner-divider"></span>
    </div>
  )
}

export default FullWidthBanner