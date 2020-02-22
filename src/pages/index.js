import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import indexStyles from "./index.module.scss"
import profileImg from "../images/me_squared.jpg"

import Head from "../components/head"
import Footer from "../components/footer"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `)

  return (
    <>
      <Head title="Home" />
      <div className={indexStyles.container}>
        <div className={indexStyles.content}>
          <header className={indexStyles.header}>
            <h1 className={indexStyles.title}>
              {data.site.siteMetadata.title}
            </h1>
            <h2 className={indexStyles.tagline}>
              {data.site.siteMetadata.tagline}
            </h2>
            <nav className={indexStyles.mainNav}>
              <ul className={indexStyles.navList}>
                <li>
                  <Link className={indexStyles.navItem} to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className={indexStyles.navItem} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    className={indexStyles.navItem}
                    href="mailto:andre.wibbeke@gmail.com"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <hr />
          </header>
          <main className={indexStyles.main}>
            <img
              src={profileImg}
              alt="André Wibbeke"
              className={indexStyles.portraitAvatar}
            />
            <section className={indexStyles.mainSection}>
              <h2>Who are you?</h2>
              <p>
                I'm a professional digital marketing manager focusing on the
                technology side of the business. I'm an expert in digital
                automation and tracking mechanisms. In my spare time, I'm
                involved in web development.
              </p>
            </section>
            <section className={indexStyles.mainSection}>
              <h2>What is this website about?</h2>
              <p>
                On this website, I'd like to dig deeper into tech related
                marketing. My goal is both to learn more about certain
                technology and to teach people about marketing technology.
              </p>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
