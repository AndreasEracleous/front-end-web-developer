import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faRss} from '@fortawesome/pro-light-svg-icons'
import Image from "../components/image"
import Menu from '../components/menu'
import "../assets/scss/header.scss"

const Footer = ({ siteTitle, menuLinks }) => (
  //Here goes logo, navigation, etc.
  <footer className="bg-dark text-secondary py-5">
    <div className="container">
     <div className="row">
         <div className="col-lg">
             <h4>Front-end Technology</h4>
            <p>This responsive web site has been designed, developed, and maintained by Andreas Eracleous. It’s developed with the latest front-end technology, built on GatsbyJS, mobile-first with Bootstrap, optimised for a fast page load, hosted on GitHub and served via Cloudflare.</p>
         </div>
         <div className="col-lg"></div>
         <div className="col-lg">
            <a href="#" className="p-1 text-white"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
            <a href="#" className="p-1 text-white"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
            <a href="#" className="p-1 text-white"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
            <a href="#" className="p-1 text-white"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            <a href="#" className="p-1 text-white"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            <a href="/rss.xml" className="p-1 text-white ml-auto"><FontAwesomeIcon icon={faRss} size="lg" /></a>
         </div>
     </div>
     <Menu menuLinks={menuLinks} />
      © {new Date().getFullYear()}, <Link to="/" className="text-decoration-none text-secondary"><span className="text-capitalize">{siteTitle}</span></Link> All Rights Reserved.
    </div>
  </footer>  
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
