import React from "react"
import "./HomeItemRow.scss"
import LinkedContentRow from "./LinkedContentRow"

const HomeItemRow = ({ items, title, type = "designs" }) => {
  if (!items) return

  const titleId = title.toLowerCase().replaceAll(" ", "-")

  return (
    <div id={titleId} className="home-item-row">
      <h2>{title}</h2>
      <div className="home-item-row-items">
        {items.map((item, i) => {
          const {
            node: {
              title,
              link,
              id,
              featuredImage,
              [`${type}`]: {
                largeMockupUrl,
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
            <LinkedContentRow
              key={id}
              link={link}
              id={id}
              title={title}
              frontImage={childImageSharp.gatsbyImageData}
              frontAlt={altText}
              isReverse={i % 2}
              itt={i}
              largeMockupUrl={largeMockupUrl}
            />     
          )
        })}
      </div>
    </div>
  )
}

export default HomeItemRow
