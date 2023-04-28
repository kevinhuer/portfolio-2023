import React from "react"
import "./FixedWidthRow.scss"

const FixedWidthRow = ({ children, component, maxWidth = null }) => {
  let styles = {}

  if (maxWidth)
    styles = {
      ...styles,
      "maxWidth": maxWidth,
    }
  return (
    <div className="fixed-width-row" style={styles}>
      {component && component()}
      {children}
    </div>
  )
}

export default FixedWidthRow
