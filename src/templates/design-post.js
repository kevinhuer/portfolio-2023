import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import ReflectedImage from "../components/ReflectedImage"
import Layout from "../components/layout"
import PostContent from "../components/PostContent"
import PostNavigation from "../components/PostNavigation"
import "./design-post.scss"


const DesignPostTemplate = ({ data: { design, next, previous } }) => {
  if (!design) return

  const { content, title, designs } = design
 if (previous) console.log("previous", previous)
  const mockupImage = getImage(designs.mainMockup.localFile)
  const largeImage = getImage(designs.largeMockup.localFile)

  return (
    <div className="design-post-layout">
      <Layout>
        <div id="main">
          <ReflectedImage
            image={mockupImage}
            alt={designs.mainMockup.altText}
          />
          <PostContent
            title={title}
            content={content}
            image={largeImage}
            alt={designs.largeMockup.altText}
          />
        </div>
        <PostNavigation next={next} previous={previous}/>
      </Layout>
    </div>
  )
}

export default DesignPostTemplate

export const pageQuery = graphql`
  query DesignPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    design: wpDesign(id: { eq: $id }) {
      title
      content
      designs {
        largeMockup {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        mainMockup {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    previous: wpDesign(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpDesign(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
export { Head } from "../components/Head"
