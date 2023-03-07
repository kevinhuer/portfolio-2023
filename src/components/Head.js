import React from "react"

export const Head = ({ location, data }) => {
  if (!data.hasOwnProperty("wpSite") && !data.hasOwnProperty("wpDesign"))
    return <title>{`Kevin Huer - Portfolio`}</title>
  const source = data.hasOwnProperty("wpSite") ? "wpSite" : "wpDesign"
  const {
    [source]: { title },
  } = data
  const siteTitle =
    location.pathname !== "/" && title
      ? `${title} - Kevin Huer - Portfolio`
      : `Kevin Huer - Portfolio`
  return <title>{siteTitle}</title>
}

export default Head
