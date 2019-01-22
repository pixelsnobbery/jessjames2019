module.exports = {
  siteMetadata: {
    title: 'Jess & James 2019',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /assets/
          }
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jess & James 2019',
        short_name: 'J&J2019',
        start_url: '/',
        background_color: '#fa6640',
        theme_color: '#fa6640',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-132398597-1",
      },
    },
    {
    resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      }     
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-netlify`,
  ],
}
