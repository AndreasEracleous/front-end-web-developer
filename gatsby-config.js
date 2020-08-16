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
    occupation: `Front End Web Developer`,
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
        link: 'https://twitter.com/SpooksPower'
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
      resolve: 'gatsby-plugin-web-vitals',
      options: {
        // The Google Analytics property ID; the reporting code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        // An array with metrics you want to track and send to analytics
        metrics: [`FID`, `TTFB`, `LCP`, `CLS`, `FCP`],
        // Event Category (optional) { string }, default 'Web Vitals'
        eventCategory: 'Performance',
        // Include Web Vitals tracking in development
        // Defaults to false meaning Vitals will only be tracked in production.
        includeInDevelopment: false,
        // Prints metrics in the console when true
        debug: false,
      }
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andreas Eracleous - Front-end web developer`,
        short_name: `Andreas Eracleous`,
        start_url: `/`,
        background_color: `#2962ff`,
        theme_color: `#2962ff`,
        display: `minimal-ui`,
        icon: `src/assets/img/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // Add after these plugins if used
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        whitelist: ['breadcrumb', 'breadcrumb__list', 'breadcrumb__list__item','breadcrumb__item','breadcrumb__title', 'breadcrumb__link', 'breadcrumb__separator', 'breadcrumb__link__active'], // Don't remove this selector
      }
    },   
    {
      resolve: `gatsby-plugin-preconnect`,
      options: {
        domains: ['//www.googletagmanager.com', '//d33wubrfki0l68.cloudfront.net', '//www.google-analytics.com'],
      },
    },    
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ]
}