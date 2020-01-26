import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"
import profileImg from "../images/me.jpg"

const IndexPage = () => {
  return (
    <>
      <header>
        <h1>André Wibbeke</h1>
        <p>- Marketing Technologist -</p>
        <nav>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="mailto:andre.wibbeke@gmail.com">Contact</a>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
      <main>
        <img
          src={profileImg}
          alt="André Wibbeke"
          width="350px"
          height="300px"
        />
        <div>
          <h2>Who are you?</h2>
          <p>
            I'm a professional digital marketing manager focusing on the
            technology side of the business. I'm an expert in digital automation
            and tracking mechanisms. In my spare time, I'm involved in web
            development.
          </p>
        </div>
        <div>
          <h2>What is this website about?</h2>
          <p>
            On this website, I'd like to dig deeper into tech related marketing.
            My goal is both to learn more about certain technology and to teach
            people about marketing technology.
          </p>
        </div>
      </main>
      <footer>
        <ul>
          <li>&#xa9; André Wibbeke</li>
          <li>
            <a href="mailto:andre.wibbeke@gmail.com">Contact Me</a>
          </li>
          <li>
            <Link to="/legal">Privacy &#38; Terms</Link>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default IndexPage
