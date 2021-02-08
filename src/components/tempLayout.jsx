/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/*
import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import HeroHeader from "./hero-header";
import Footer from "./footer"
import Helmet from 'react-helmet'
//import { config, dom } from '@fortawesome/fontawesome-svg-core'
import "../assets/scss/main.scss"
//import "../assets/scss/header.scss"

//config.autoAddCss = false;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          occupation,
          menuLinks {
              name
              link
          }          
        }
      }
    }
  `)
  const {title, occupation, menuLinks} = data.site.siteMetadata;
  return (
    <>
<Helmet
    meta={[
    { name: 'google-site-verification', content: 'xa0E3FvD7H7xRhk5pdtp0gG4dcnAAoL1D4F-VzPPAcE'  },
    ]}/>
      <Header siteTitle={title} siteOccupation={occupation} menuLinks={menuLinks} />
      <HeroHeader/>
      <main>{children}</main>
      <Footer siteTitle={title} menuLinks={menuLinks}/>
</>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
*/
