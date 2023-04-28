import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "./LinkedContentRow.scss"

const LinkedContentRow = ({
  link,
  id,
  title,
  frontImage,
  frontAlt,
  isReverse,
  largeMockupUrl,
  itt,
}) => {

  const defaultRadius = Math.round(Math.sqrt(Math.pow(1.2 * window.innerWidth, 2) + Math.pow(1.2 * window.innerHeight, 2)))
  console.log("largeMockupUrl", largeMockupUrl)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [radius, setRadius] = useState(defaultRadius)
  const section = useRef(null)
  
  const handleScroll = () => {
    // const { top, bottom, height } = section.current.getBoundingClientRect()
    // const yPosition = (Math.round(top) / Math.round(height)) * 100
    // var scrollTop = window.pageYOffset;
    // console.log("scrollTOp", scrollTop)
    // console.log("box", section.current.getBoundingClientRect())
    // setScrollPosition(yPosition)

    // vid="cG9zdDo2NTM=" top
    // "cG9zdDo2Mzc=" second
    const { top, height } = section.current.getBoundingClientRect()
    if (section.current.dataset.vid == "cG9zdDo2Mzc=") { console.log("top: ", top, "radius: ", radius, "window.innerWidth: ", window.innerWidth, "window.innerHeight: ", window.innerHeight )}
    const offScreen = top >= height

    // if you decrease beginReveal, you need to increase speedUp or more circle will be left showing
    const beginReveal = 0.2
    const speedUp = 10

    if (offScreen) {
      if (section.current.dataset.vid == "cG9zdDo2Mzc=") { console.log("off screen") }
      setRadius(defaultRadius)
    }

    if ((top > 0) && (top < beginReveal * height)) {
      const revealedTop = defaultRadius - speedUp * ((beginReveal * height) - top)
      if (section.current.dataset.vid == "cG9zdDo2Mzc=") { console.log("revaledTop: ", revealedTop)}
      setRadius(revealedTop >= 0 ? Math.round(revealedTop) : 0)
    }
  }

  //CALCULATE RADIUS
  // const radius =
  //   Math.round(100 + scrollPosition * 2) * 5 > 0
  //     ? Math.round(100 + scrollPosition * 2) * 5
  //     : 0

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [radius])

  return (
    <div ref={section} key={id} className={`LinkedContentRow`} data-vid={id}>
      <div className={`content-container ${isReverse ? `reverse` : ``}`}>
        <div className="text">
          <Link className="link" to={link}>
            <h3>{title}</h3>
          </Link>
        </div>
        <div className="image">
          <GatsbyImage alt={frontAlt} image={frontImage} />
        </div>
      </div>
      {!isReverse && (
         <svg className="svg-masker" height="100%" width="100%">
         <defs>
         <clipPath id={`user-space-${id}`} clipPathUnits="userSpaceOnUse">
          <circle className="blurred" cx="120%" cy="120%" r={radius} fill="gray" />
          </clipPath>
          </defs>
          <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={largeMockupUrl} clipPath={`url(#user-space-${id})`}/>
        </svg>
      )}
      {isReverse && (
        <svg className="svg-masker" height="100%" width="100%">
          <defs>
          <clipPath id={`user-space-${id}`} clipPathUnits="userSpaceOnUse">
            <circle cx="-20%" cy="120%" r={radius} fill="black" />
            </clipPath>
          </defs>
          <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={largeMockupUrl} clipPath={`url(#user-space-${id})`}/>
        </svg>
      )}
    </div>
  )
}

export default LinkedContentRow
