import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = ({ siteTitle, menuLinks }) => (
  //Here goes logo, navigation, etc.
  <footer className="bg-dark text-white">
    {
    /* 
    <Link to="/#goTop" id="scrollme" className="goTop">
      <FontAwesomeIcon icon={faChevronUp} size="2x" />
    </Link>
    */
    }
    <div className="container">
     <div className="row">
         <div className="col-lg mt-5">
             <h4 className="h5 font-weight-normal mb-3">Front-end Technology</h4>
             <p className="font-weight-light">This responsive web site has been designed, developed, and maintained by Andreas Eracleous. It’s developed with the latest front-end technology, built on GatsbyJS, mobile-first with Bootstrap, optimised for a fast page load, hosted on GitHub and served via Cloudflare.</p>
         </div>
         <div className="col-lg mt-5">
         <h4 className="h5 font-weight-normal mb-3">About</h4>
         <ul className="nav flex-column">
         <li className="nav-item">
            <Link to="/hire-me" className="nav-link text-white text-capitalize">How to hire me</Link>
          </li>             
          <li className="nav-item">
            <Link to="/resume" className="nav-link text-white text-capitalize">Resume</Link>
          </li>        
        </ul>
         </div>
         <div className="col-lg mt-5">
         <h4 className="h5 font-weight-normal mb-3">Social</h4>
         <a href="https://twitter.com/AndrewEracleous" target="_blank" rel="noopener noreferrer" className="p-3 text-white"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href="https://cy.linkedin.com/in/andreaseracleous" target="_blank" rel="noopener noreferrer" className="p-3 text-white"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a href="https://github.com/AndreasEracleous" target="_blank" rel="noopener noreferrer" className="p-3 text-white"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
        <div itemScope itemType="http://schema.org/Person" className="mt-4">
            <div itemProp="name">Andreas Eracleous</div>
            <div itemProp="company">Front End Web Developer</div>
            <a itemProp="email" href="mailto:andrew.eracleous@gmail.com" className="text-white">andrew.eracleous@gmail.com</a>
        </div>
         </div>
     </div>
     </div>
      <div className="bg-opacity mt-5 py-3">
     <div className="container d-flex flex-wrap">
       <p className="m-0 my-auto small">© {new Date().getFullYear()}, <Link to="/" className="text-decoration-none text-white"><span className="text-capitalize">{siteTitle}</span></Link> All Rights Reserved.</p>
       <nav className="ml-auto">
          <ul className="nav small">
            <li className="nav-item"><Link to="/privacy-policy" className="nav-link nav-link-footer text-white">Privacy Policy</Link></li>
            <li className="nav-item"><Link to="/terms-of-service" className="nav-link nav-link-footer text-white">Terms of Service</Link></li>
            <li className="nav-item"><Link to="/disclaimer" className="nav-link nav-link-footer text-white">Disclaimer</Link></li>
            <li className="nav-item"><Link to="/cookies-policy" className="nav-link nav-link-footer text-white">Cookie Policy</Link></li>
            <li className="nav-item"><a href="/sitemap.xml" className="nav-link nav-link-footer text-white">Sitemap</a></li>
          </ul> 
        </nav>  
     </div>
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
