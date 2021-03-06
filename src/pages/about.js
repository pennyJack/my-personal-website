import React from "react"

import aboutStyles from "./about.module.scss"
import profileImg from "../images/me_squared.jpg"

import Layout from "../components/layout"
import Head from "../components/head"
import ExtLink from "../components/link"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" description="More details about André Wibbeke" />
      <h1>About Me</h1>
      <img
        src={profileImg}
        alt="André Wibbeke"
        className={aboutStyles.portraitMedium}
      />
      <h2>HI, I'M ANDRÉ.</h2>
      <p>
        I’ve been working in the digital marketing space since January 2018,
        first as a SEA specialist, then transitioned to an Activation Manager
        position in Programmatic Advertising. I was responsible for planning and
        managing Programmatic campaigns for well-known brands in the health care
        sector.
      </p>
      <p>
        Since I’ve been always more interested in the technology side of the
        business I’ve started working as Product Implementation Manager in the
        Digital Technology Department of{" "}
        <ExtLink to="https://www.dentsuaegisnetwork.com/de/de">
          Dentsu Aegis Network Germany
        </ExtLink>{" "}
        in April 2019.
      </p>
      <p>
        In a nutshell, our department oversees and maintains the infrastructure
        that powers the digital advertising ecosystem. Most of our efforts are
        focused on Programmatic Advertising but not exclusively.
      </p>
      <p>
        We cover a myriad of topics: from advanced AI projects to advising
        internal and external stakeholders, resolving data and tracking
        challenges, troubleshooting technical issues, supporting the development
        of new products, or just testing some new piece of technology to asses
        it’s capabilities.
      </p>
      <p>
        Feel free to find out more about my role on{" "}
        <ExtLink to="https://www.linkedin.com/in/andr%C3%A9-wibbeke-aa76a4138/">
          LinkedIn
        </ExtLink>
        . Don’t hesitate to get in touch or send me an invitation to connect.
      </p>
      {/* <h2>Aren’t there like a thousand marketing blogs already out there?</h2>
      <p>
        Yes, there are, but very few take a holistic approach over the whole
        MadTech ecosystem, explaining how its individual parts fit together.
      </p>
      <p>
        Last but not least, I find most articles rather shallow. They don't dig
        deep enough to uncover what’s going on behind the curtain.
      </p> */}
      <h2>What else is there to know about you?</h2>
      <p>
        To get a better grasp of how digital marketing technologies work it’s
        helpful to have a good understanding of the web and get acquainted with
        its primary technologies, namely HTML, CCS, and JavaScript.
      </p>
      <p>
        This is one of the reasons I decided to spend some of my spare time
        working on my web development skills. For instance, I build this website
        using modern front-end technologies, like{" "}
        <ExtLink to="https://reactjs.org/">ReactJS</ExtLink> and{" "}
        <ExtLink to="https://www.gatsbyjs.org/">GatesbyJS</ExtLink>.
      </p>
      <p>
        I’m also hosting a{" "}
        <ExtLink to="https://www.meetup.com/de-DE/hack-and-talk-meetup-duesseldorf/">
          bi-weekly Meetup
        </ExtLink>{" "}
        in Düsseldorf for people who are interested in learning about web
        development with JavaScript. It not only helps to understand things
        better but enables you to be creative and build a great many things.
      </p>
    </Layout>
  )
}

export default AboutPage
