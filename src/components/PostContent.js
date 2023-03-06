import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import "./PostContent.scss"

const PostContent = ({ title, content, image, alt, siteUrl }) => {
  return (
    <>
      <div className="content">
        <div className="text-content">
          <h1 className="post-title">{title}</h1>
          {siteUrl && (
            <span className="post-url">
              <a rel="noreferrer" target="_blank" href={siteUrl}>{siteUrl}</a>
            </span>
          )}
          <div className="post-content">{parse(content)}</div>
        </div>
        <div className="image-content">
          <GatsbyImage image={image} alt={alt} />
        </div>
      </div>
    </>
  )
}

export default PostContent
