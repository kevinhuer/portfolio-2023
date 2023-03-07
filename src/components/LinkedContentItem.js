import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./LinkedContentItem.scss"

const LinkedContentItem = ({id, link, title, backImage, frontImage, backAlt, frontAlt}) => {
  return (
    <Link key={id} className="linked-content-item" to={link}>
      <div className="linked-content">
        <div className="linked-content-full-image">
          <GatsbyImage image={backImage} alt={backAlt} />
          <GatsbyImage
            className="linked-content-mockup-image"
            image={frontImage}
            alt={frontAlt}
          />
        </div>
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default LinkedContentItem
