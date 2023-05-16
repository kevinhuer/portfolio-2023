import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import HomeItemRow from "./HomeItemRow"
import EdgeListing from "./EdgeListing"

const Sites = () => {
  const {
    allWpSite: { edges },
  } = useStaticQuery(QUERY)
  if (!edges) return
  return (
    <>
      <h2 className="centered-text">Recent freelance work</h2>
      <EdgeListing edges={edges} type={`sites`} category={"Freelance"} />
      <h2 className="centered-text">Past agency work</h2>
      <EdgeListing edges={edges} type={`sites`} category={"Agency"} />
    </>
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
          categories {
            nodes {
              name
            }
          }
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
          }
        }
      }
    }
  }
`
