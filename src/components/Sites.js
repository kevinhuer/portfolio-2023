import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import HomeItemRow from "./HomeItemRow"

const Sites = () => {
  const {
    allWpSite: { edges },
  } = useStaticQuery(QUERY)
  if (!edges) return
  return (
      <HomeItemRow items={edges} title={'Recent client work'} type={"sites"}/> 
  )
}

export default Sites

const QUERY = graphql`
  query GetSites {
    allWpSite {
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
          sites {
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
          }
        }
      }
    }
  }
`
