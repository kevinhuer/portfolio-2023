import React, { useState } from "react"
import { Link } from "gatsby"
import "./Menu.scss"

const Menu = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const mobileMenuClass = open ? "mobile open" : "mobile"

  return (
    <div id="menu">
      <ul className="desktop">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/#recent-design-work"}>Design Work</Link>
        </li>
        <li>
          <Link to={"/#recent-client-work"}>Client Work</Link>
        </li>
        <li>
          <Link to={"/#contact"}>Contact</Link>
        </li>
      </ul>
      <button className="mobile-toggle" onClick={handleClick}>
        Menu
      </button>

      <ul className={mobileMenuClass}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/#recent-design-work"}>Design Work</Link>
        </li>
        <li>
          <Link to={"/#recent-client-work"}>Client Work</Link>
        </li>
        <li>
          <Link to={"/#contact"}>Contact</Link>
        </li>
        <li>
          <button className="menu-close" onClick={handleClick}>
            CLOSE
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
