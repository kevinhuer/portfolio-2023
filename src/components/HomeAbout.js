import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./HomeAbout.scss"

const HomeAbout = () => {
  const data = useStaticQuery(QUERY)
  if (!data) return
  console.log("about", data)
  const {
    wpPage: {
      id,
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
        <a href={linkedinUrl} target="_blank" className="about-link">
          Contact me on LinkedIn <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  )
}

export default HomeAbout

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
