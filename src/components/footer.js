import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.copyright}>
        &#xa9; {data.site.siteMetadata.author}
      </div>
      <ul className={footerStyles.footerNavList}>
        <li>
          <a
            className={footerStyles.footerNavItem}
            href="mailto:wibbeke.andre@gmail.com"
          >
            Contact Me
          </a>
        </li>
        <li>
          <Link className={footerStyles.footerNavItem} to="/legal">
            Privacy &#38; Terms
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
