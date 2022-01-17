require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Desde Crespo`,
    description: `Diario`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout/Layout.tsx`),
      },
    },
    'gatsby-plugin-htaccess',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
          disableMinification: true,
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
        icon: `src/images/desde-crespo-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: process.env.GATSBY_GCMS_URL,
      },
    },
    {
      resolve: `gatsby-plugin-pinterest-twitter-facebook`,
      options: {
        delayTimer: 10000,
        pinterest: {
          enable: false,
          tall: false,
          round: false,
        },
        twitter: {
          enable: true,
          containerSelector: null,
          handle: null,
          showFollowButton: true,
          showTimeline: true,
          showFollowerCount: true,
          timelineTweetCount: 1,
          width: null,
          height: null,
          noHeader: true,
          noFooter: true,
          noBorders: true,
          noScrollbar: true,
          transparent: true,
        },
        facebook: {
          enable: true,
          containerSelector: null,
          profile: null,
          width: null,
          height: null,
          tabs: 'timeline, events, messages',
          hideCover: false,
          showFacepile: true,
          smallHeader: false,
          adaptContainerWidth: true,
        },
      },
    },
  ],
};
