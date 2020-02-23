import React from "react"

import layoutStyles from "./layout.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <main className={layoutStyles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
