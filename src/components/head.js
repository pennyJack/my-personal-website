import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

Head.defaultProps = {
  description: ``,
}

Head.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Head
