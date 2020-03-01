import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" description="Overview of the latest blog posts" />
      <h1>Blog</h1>
      <p>Coming soon! :-)</p>
      {/* <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, index) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol> */}
    </Layout>
  )
}

export default BlogPage
