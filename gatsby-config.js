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
    'gatsby-transformer-remark',
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
