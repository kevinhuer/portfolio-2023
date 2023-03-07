import React from "react"

export const Head = ({ location, data }) => {
  if (!data.hasOwnProperty("wpSite") && !data.hasOwnProperty("wpDesign"))
    return (
      <>



        <title>{`Kevin Huer - Portfolio`}</title>
        <meta
          name="description"
          content="Kevin Huer, Toronto based WordPress and front end web development and web design specialist"
        ></meta>
      </>
    )
  const source = data.hasOwnProperty("wpSite") ? "wpSite" : "wpDesign"
  const {
    [source]: { title },
  } = data
  const siteTitle =
    location.pathname !== "/" && title
      ? `${title} - Kevin Huer - Portfolio`
      : `Kevin Huer - Portfolio`
  return (
    <>
 

      <title>{siteTitle}</title>
      <meta
        name="description"
        content="Kevin Huer, WordPress and front end web development specialist"
      ></meta>
    </>
  )
}

export default Head
