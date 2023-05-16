import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import "./EdgeListing.scss"

const EdgeListing = ({ edges, type, category }) => {
  return (
    // let's at least try to make things more semantic
    <section className="EdgeListing">
      {edges.map(item => {
        const {
          node: { id, link, title, categories, designs = null, sites = null },
        } = item

        const postType = designs ? designs : sites
        const theCategory = categories ? categories.nodes[0].name : null

        if (type === "sites" && theCategory !== category) return
        return (
          <Link to={link} key={id} className={`EdgeItem ${type}`}>
            <article>
              <GatsbyImage
                image={
                  postType.mainMockup.localFile.childImageSharp.gatsbyImageData
                }
                alt={postType.mainMockup.altText}
              />
              {type !== "sites" && (
                <img
                  className="float-image"
                  src={postType.largeMockupUrl}
                  alt={`large mockup for ${title}`}
                />
              )}
              <div className="title">{title}</div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default EdgeListing
