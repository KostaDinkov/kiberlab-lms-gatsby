/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My first Gatsby site`,
    description: `Description for my first Gatsby site`
  },
  plugins: [
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `topics`,
        path: `${__dirname}/src/topics`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media`,
      }
    },
    {
      resolve:'gatsby-plugin-mdx',
      options:{
        extensions:['.md','.mdx'],
        gatsbyRemarkPlugins:[
          {
            resolve:'gatsby-remark-highlight-code',
            options:{
              terminal:"carbon",
              theme:"one-dark"
            }
          },
          // {
          //   resolve:'gatsby-remark-images',
          //   options:{
              
          //     backgroundColor: "none",
          //     linkImagesToOriginal: false
          //   }
          // },
          
        ]
      }
    },
    //`gatsby-remark-images`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require("sass")
      }
    }

  ],
}
