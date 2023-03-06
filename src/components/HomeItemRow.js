import React from "react"
import LinkedContentItem from "./LinkedContentItem"
import "./HomeItemRow.scss"

const HomeItemRow = ({ items, title, type = "designs" }) => {
  if (!items) return

  const titleId = title.toLowerCase().replaceAll(" ", "-")
  return (
    <div id={titleId} className="home-item-row">
      <h2>{title}</h2>
      <div className="home-item-row-items">
        {items.map(item => {
          const {
            node: {
              title,
              link,
              id,
              featuredImage,
              [`${type}`]: {
                mainMockup: {
                  altText,
                  localFile: { childImageSharp },
                },
              },
              featuredImage: {
                node: {
                  localFile: {
                    childImageSharp: { gatsbyImageData },
                  },
                },
              },
            },
          } = item
          return (
            <LinkedContentItem
              key={id}
              link={link}
              id={id}
              title={title}
              backImage={gatsbyImageData}
              backAlt={featuredImage.node.altText}
              frontImage={childImageSharp.gatsbyImageData}
              frontAlt={altText}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HomeItemRow
