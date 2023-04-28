import React from "react"
import "./FullWidthRow.scss"

const FullWidthRow = ({ children, component }) => {
  return (
    <div className="full-width-row">
      {component && component()}
      {children}
    </div>
  )
}

export default FullWidthRow
