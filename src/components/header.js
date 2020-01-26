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
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/"
        >
          <div className={headerStyles.navLogo}>
            {data.site.siteMetadata.author}
          </div>
        </Link>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              My Blog
            </Link>
          </li>
          <li>
            <a
              className={headerStyles.navItem}
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
