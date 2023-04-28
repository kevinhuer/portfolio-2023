import React from "react"
import { Link } from "gatsby"
import Menu from "./Menu"
import FixedWidthRow from "./FixedWidthRow"
import "./Layout.scss"

const Layout = ({ children, isHome = false }) => {
  return (
    <div id="layout">
      <div id="header">
        <FixedWidthRow>
          <div id="header-container">
            <div id="logo">
              <Link to={"/"}>Kevin Huer</Link>
            </div>
            <Menu />
          </div>
        </FixedWidthRow>
      </div>
      {children}
    </div>
  )
}

export default Layout
