import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

// To access the context from gatsby-node.js dynamically we can't use 'useStaticQuery'
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 120)
      frontmatter {
        title
        date
        description
      }
      html
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <Head
        title={data.markdownRemark.frontmatter.title}
        description={
          data.markdownRemark.frontmatter.description ||
          data.markdownRemark.excerpt
        }
      />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  )
}

export default Blog
