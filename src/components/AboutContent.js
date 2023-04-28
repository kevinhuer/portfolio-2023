import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./AboutContent.scss"

const AboutContent = () => {
  const data = useStaticQuery(QUERY)
  if (!data) return

  const {
    wpPage: {
      content,
      title,
      about: { linkedinUrl },
    },
  } = data

  return (
    <div className="HomeAbout">
      <h2>{title}</h2>
      {parse(content)}

      <div className="about-link-container">
        <a href={linkedinUrl} target="_blank" rel="noreferrer" className="about-link">
          Contact me on LinkedIn <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  )
}

export default AboutContent

const QUERY = graphql`
  query AboutQuery {
    wpPage(slug: { eq: "about" }) {
      id
      content
      title
      about {
        linkedinUrl
      }
    }
  }
`
