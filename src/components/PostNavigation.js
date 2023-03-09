import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowCircleLeft,
  faArrowAltCircleRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons"
import "./PostNavigation.scss"

const PostNavigation = ({ previous, next }) => {
  return (
    <div className="PostNavigation">
      <div className="container">
        <div className="container-link">
          {previous && (
            <Link to={previous.uri}>
              <FontAwesomeIcon icon={faArrowCircleLeft} />
              <span className="previous-text">{previous.title}</span>
            </Link>
          )}
          {!previous && (
            <Link to={"/"}>
              <FontAwesomeIcon icon={faHome} />
              <span className="previous-text">Home</span>
            </Link>
          )}
        </div>

        <div className="container-link">
          {next && (
            <Link to={next.uri}>
              <span className="next-text">{next.title}</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Link>
          )}
          {!next && (
            <Link to={"/"}>
              <span className="next-text">Home</span>
              <FontAwesomeIcon icon={faHome} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostNavigation
