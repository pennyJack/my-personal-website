import React from "react"

import aboutStyles from "./about.module.scss"
import profileImg from "../images/me_squared.jpg"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <h1>About Me</h1>
      <img
        src={profileImg}
        alt="André Wibbeke"
        className={aboutStyles.portraitMedium}
      />
      <h2>HI, I'M ANDRÉ.</h2>
      <p>
        While working as digital advertising expert by day, I’m a tech
        enthusiast and coder in my spare time. I’m also a voracious reader, and
        a passionate CrossFit athlete. Feel free to get in touch any time or
        follow me on my Social Media accounts.
      </p>
      <p>
        I hear and I forget. I see and I remember. I do and I understand. -
        Confucius
      </p>
      <p>
        I’m a big fan of online education. I sincerely believe that education
        should be less about merely piling up knowledge but rather empowering
        students to actively apply their learning, supported by teachers acting
        as coaches, not instructors. I’m convinced that only by practicing we
        can master a new skill or ability permanently.
      </p>
    </Layout>
  )
}

export default AboutPage
