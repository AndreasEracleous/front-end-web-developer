module.exports = {
  siteMetadata: {
    title: `Andreas Eracleous`,
    profession: `Front end web developer`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menuLinks:[
      {
      name:'home',
      link:'/'
      },
      {
      name:'work',
      link:'/work'
      },
      {
      name:'services',
      link:'/services'
      }, 
      {
      name:'blog',
      link:'/blog'
      },
      {
      name:'about',
      link:'/about'
      },
      {
      name:'contact',
      link:'/contact'
      },                                      
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/img`,
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
        icon: `src/assets/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      /*options: {
        postCssPlugins: [somePostCssPlugin()],
        precision: 6,
      },
      */
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
