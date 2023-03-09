import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import ReflectedImage from "../components/ReflectedImage"
import Layout from "../components/layout"
import PostContent from "../components/PostContent"
import PostNavigation from "../components/PostNavigation"
import "./site-post.scss"


const SitePostTemplate = ({ data: {  site, previous, next } }) => {
  if (!site) return

  const { content, title, sites, sites:{siteUrl} } = site
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
        <PostNavigation previous={previous} next={next} /> 
      </Layout>
    </div>
  )
}

export default SitePostTemplate

export const pageQuery = graphql`
  query SitePostById(
    $id: String!    
     $previousPostId: String
     $nextPostId: String
    ) {
    site: wpSite(id: { eq: $id }) {
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
    previous: wpSite(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpSite(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
export {Head} from '../components/Head';