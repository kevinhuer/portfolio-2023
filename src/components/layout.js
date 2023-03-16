import React from "react"
import { Link } from "gatsby"
import "./Layout.scss"
import Menu from "./Menu"

const Layout = ({ children, isHome = false }) => {
  return (
    <>

      <div id="header">
        <div id="header-container">
          <div id="logo">
            <Link to={"/"}>Kevin Huer</Link>
          </div>
          <Menu />
        </div>
      </div>
      {children}
    </>
  )
}

export default Layout
