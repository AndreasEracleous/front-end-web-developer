/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Andreas Eracleous`,
    occupation: `Front end web developer`,
    description: `Andreas is a freelance Front-end Web Developer who is expert in converting PSD to Bootstrap website, HTML, CSS, JavaScript code and he is experienced with optimizing website load speed. Also, he is available for development jobs for helping you with your website and progressive web app.`,
    siteUrl: `https://andreaseracleous.com`,
    author: `@AndrewEracleous`,
    menuLinks:[
      {
      name:'Home',
      link:'/'
      },
      {
      name:'Work',
      link:'/#work'
      },
      {
      name:'Services',
      link:'/#services'
      },
      {
      name:'Blog',
      link:'/blog'
      },
      {
      name:'About',
      link:'/about'
      },
      {
      name:'Contact',
      link:'/#contact'
      },                                     
    ],
    socialLinks:{
      facebook: {
        name: 'Facebook',
        link: 'https://www.facebook.com/andrew.eracleous'
      },      
      twitter: {
        name: 'Twitter',
        link: 'https://twitter.com/AndrewEracleous'
      },
      github: {
        name: 'Github',
        link: 'https://github.com/AndreasEracleous'
      },
      linkedin: {
        name: 'Linkedin',
        link: 'https://cy.linkedin.com/in/andreaseracleous'
      },
      instagram: {
        name: 'Instagram',
        link: 'https://www.instagram.com/sp0_0ky'
      },           
    },   
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },      
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          location: {
            pathname: "/",
          },
          crumbLabel: "Home",
          crumbSeparator: " / ",
        },
        // required to enable classNames
        useClassNames: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark (
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    /*   
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
      },   
    },
    {
      resolve: 'gatsby-plugin-guess-js',
      options: {
        GAViewID: process.env.GATSBY_GOOGLE_ANALYTICS_VIEW_ID, // Google Analytics view ID
        jwt: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
        },
        minimumThreshold: 0.03,
        period: {
          startDate: new Date("2018-5-5"),
          endDate: new Date("2018-6-10"),
        },      
      },  
    },

    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
          // your segment write key for your production environment
          // when process.env.NODE_ENV === 'production'
          // required; non-empty string
          prodKey: process.env.GATSBY_SEGMENT_WRITE_KEY,

          // if you have a development env for your segment account, paste that key here
          // when process.env.NODE_ENV === 'development'
          // optional; non-empty string
          devKey: process.env.GATSBY_SEGMENT_WRITE_KEY,

          // boolean (defaults to false) on whether you want
          // to include analytics.page() automatically
          // if false, see below on how to track pageviews manually
          trackPage: false,

          // boolean (defaults to false) on whether to load segment
          // after a user action (scroll or route change) + delay
          // this will bring down your TTI but you might miss 1 second of data.
          // see here for more info on TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
          delayLoad: false,

          // time to wait after scroll action in ms. Defaults to 1000ms
          delayLoadTime: 1000
      }
    },    
     */
    {
      resolve: 'gatsby-plugin-analytics-without-segment',
      options: {
        cdnUrl: 'https://cdnjs.cloudflare.com/ajax/libs/analytics.js/2.9.1/analytics.min.js',  // host yourself or use cdnjs (https://cdnjs.com/libraries/analytics.js)
        services: {
          // see integration https://github.com/segment-integrations/analytics.js-integration-google-analytics/blob/master/lib/index.js
          'Google Analytics': {
            trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
            anonymizeIp: true,
          },
        },
      },
    },    
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andreas Eracleous`,
        short_name: `Andreas Eracleous`,
        start_url: `/`,
        background_color: `#0D47A1`,
        theme_color: `#0D47A1`,
        display: `minimal-ui`,
        icon: `src/assets/img/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about/`, `/blog`, `/blog/*`],
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