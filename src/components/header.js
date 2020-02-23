import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
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
    <header className={headerStyles.header}>
      <nav className={headerStyles.mainNav}>
        <div className={headerStyles.navLogo}>
          <Link className={headerStyles.link} to="/">
            {data.site.siteMetadata.author}
          </Link>
        </div>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <a
              className={headerStyles.link}
              href="mailto:andre.wibbeke@gmail.com"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
