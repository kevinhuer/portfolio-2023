import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import ReflectedImage from "../components/ReflectedImage"
import Layout from "../components/layout"
import "./site-post.scss"
import PostContent from "../components/PostContent"

const SitePostTemplate = ({ data: { wpSite } }) => {
  if (!wpSite) return

  const { content, title, sites, sites:{siteUrl} } = wpSite
  const mockupImage = getImage(sites.mainMockup.localFile)
  const largeImage = getImage(sites.fullDesign.localFile)

  return (
    <div className="site-post-layout">
      <Layout>
        <div id="main">
          <ReflectedImage image={mockupImage} alt={sites.mainMockup.altText} />
          <PostContent
            title={title}
            content={content}
            image={largeImage}
            alt={sites.fullDesign.altText}
            siteUrl={siteUrl}
          />
        </div>
      </Layout>
    </div>
  )
}

export default SitePostTemplate

export const pageQuery = graphql`
  query SitePostById($id: String!) {
    wpSite(id: { eq: $id }) {
      title
      content
      sites {
        siteUrl
        fullDesign {
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