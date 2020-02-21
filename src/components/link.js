import React from "react"

import linkStyles from "./link.module.scss"

const Link = ({ src, children }) => {
  return (
    <a
      href={src}
      className={linkStyles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default Link
