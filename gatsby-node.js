const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get path to template
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  // Query for markdown nodes to use in creating pages
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog post pages
  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/blog/${edge.node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
