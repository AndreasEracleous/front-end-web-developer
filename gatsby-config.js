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
    description: `Andreas is a freelance Front end web developer in Cyprus, who specialises in building responsive website, progressive web application and web performance optimization. Also he is experienced on ReactJS, GatsbyJS, GraphQL and NodeJS development.`,
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
      link:'/#about'
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://andreaseracleous.com',
        sitemap: 'https://andreaseracleous.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },    
    {
      resolve: 'gatsby-plugin-analytics-without-segment',
      options: {
        cdnUrl: `https://cdnjs.cloudflare.com/ajax/libs/analytics.js/2.9.1/analytics.min.js`,  // host yourself or use cdnjs (https://cdnjs.com/libraries/analytics.js)
        services: {
          // see integration https://github.com/segment-integrations/analytics.js-integration-google-analytics/blob/master/lib/index.js
          'Google Analytics': {
            trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
            anonymizeIp: true,
          },
        },
      },
    },    
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
      resolve: `gatsby-plugin-sass`,
      /*options: {
        postCssPlugins: [somePostCssPlugin()],
        precision: 6,
      },
      */
    },
    // Add after these plugins if used
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        //tailwind: true, // Enable tailwindcss support
        whitelist: ['breadcrumb', 'breadcrumb__title', 'breadcrumb__link', 'breadcrumb__separator', 'breadcrumb__link__active'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        //purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },       
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ]
}