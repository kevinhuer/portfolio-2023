import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import ReflectedImage from "../components/ReflectedImage"
import Layout from "../components/layout"
import "./design-post.scss"
import PostContent from "../components/PostContent"

const DesignPostTemplate = ({ data: { wpDesign } }) => {
  if (!wpDesign) return

  const { content, title, designs } = wpDesign
  const mockupImage = getImage(designs.mainMockup.localFile)
  const largeImage = getImage(designs.largeMockup.localFile)
  console.log("designs.largemockup.altext", designs)
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
      </Layout>
    </div>
  )
}

export default DesignPostTemplate

export const pageQuery = graphql`
  query DesignPostById($id: String!) {
    wpDesign(id: { eq: $id }) {
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
  }
`
export {Head} from '../components/Head';