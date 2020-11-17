/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:`My first Gatsby site`,
    description:`Description for my first Gatsby site`
  },
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `courses`,
        path: `${__dirname}/src/courses`,
      }
    },
    'gatsby-transformer-remark'
  ],
}
