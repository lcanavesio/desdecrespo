require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  
  siteMetadata: {
    title: `Desde Crespo`,
    description: `Diario`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
     // `gatsby-plugin-typescript` is automatically included in gatsby
    // You only need to explicitly define it here if you need to configure
    // specific options in it
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {
          // disableAutoprefixing: true,
           disableMinification: true
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        // GraphQL endpoint, relative to your WordPress home URL.
        url: "https://www.desdecrespo.com.ar/graphql",
        // `${process.env.WORDPRESS_URL}/graphql`,
        // GraphQL endpoint using env variable
       // url: "${process.env.WORDPRESS_URL}/graphql",
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: process.env.GATSBY_GCMS_URL
      }
    },
  ],
}
