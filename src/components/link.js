import React from "react"

import linkStyles from "./link.module.scss"

const Link = ({ to, children }) => {
  return (
    <a
      href={to}
      className={linkStyles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default Link
