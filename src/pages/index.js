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
            <div className={indexStyles.caption}>
              <h1 className={indexStyles.title}>
                {data.site.siteMetadata.title}
              </h1>
              {/* <p className={indexStyles.tagline}>
                {data.site.siteMetadata.tagline}
              </p> */}
            </div>
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
                    href="mailto:wibbeke.andre@gmail.com"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
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
                I'm a digital advertising specialist and analytics developer
                with over two years of experience in{" "}
                <b>Programmatic Advertising</b>.
              </p>
              <p>
                I'm currently employed as Product Implementation Manager at
                Dentsu Aegis Network Germany. Our team is responsible for
                overseeing the technology landscape powering digital
                advertising.
              </p>
            </section>
            <section className={indexStyles.mainSection}>
              <h2>What is this website about?</h2>
              <p>
                My goal for this website is to publish articles in a regular
                fashion, which I hope to be both interesting and insightful. For
                the tech savvy reader I'll go a bit more into the details.
              </p>
              <p>
                Last but not least I hope you may be able to apply some of the
                information received in your own work.
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
