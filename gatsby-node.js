const { Reporter } = require("gatsby");
const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require("path");

exports.onCreateNode = ({node, getNode, actions})=>{
  const {createNodeField} = actions;

  if(node.internal.type === `Mdx`){
    const slug = createFilePath({node, getNode, basePath:'topics'})
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name:`slug`,
      value: slug
    })
    createNodeField(
      {node,
      name:'topic',
      value:parent.relativeDirectory,
      }
    )
  }
  
}

exports.createPages = async ({graphql, actions, reporter})=>{
  const {createPage} = actions
  const result = await graphql(`
  {
    allMdx {
      edges {
        node {
          id
          fields {
            slug
          }
          parent {
            ... on File {
              id
              name
              relativeDirectory
            }
          }
          frontmatter {
            imageUrl
          }
        }
      }
    }
  }
  `)

  if(result.errors){
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  result.data.allMdx.edges.forEach(({node})=>{
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/lesson.js`),
      context:{
        id: node.id,
        relativePath: node.frontmatter.imageUrl
      },
    })
  })
}