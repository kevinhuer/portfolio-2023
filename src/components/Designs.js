import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import HomeItemRow from "./HomeItemRow"
import EdgeListing from "./EdgeListing"

const Designs = () => {
  const {
    allWpDesign: { edges },
  } = useStaticQuery(QUERY)
  if (!edges) return
  return (
    <EdgeListing edges={edges} type={`designs`}/>
    // <HomeItemRow items={edges} title={"Recent design work"} type={"designs"} />
  )
}

export default Designs

const QUERY = graphql`
  query GetDesigns {
    allWpDesign {
      edges {
        node {
          id
          title
          link
          featuredImage {
            node {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          designs {
            largeMockupUrl
            mainMockup {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    width: 1000
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              altText
            }
            largeMockup {
              sourceUrl
            }
          }
        }
      }
    }
  }
`
