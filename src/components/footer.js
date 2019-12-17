import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialIcons from '../components/social-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/pro-light-svg-icons'
import Image from "../components/image"
import Menu from '../components/menu'
import "../assets/scss/header.scss"

const Footer = ({ siteTitle, menuLinks }) => (
  //Here goes logo, navigation, etc.
  <footer className="bg-dark text-secondary pt-5">
    <Link to="/#goTop" id="scrollme" className="goTop">
      <FontAwesomeIcon icon={faChevronUp} size="2x" />
    </Link>
    <div className="container">
     <div className="row">
         <div className="col-lg">
             <h4 className="h5 font-weight-normal">Front-end Technology</h4>
             <p className="font-weight-light">This responsive web site has been designed, developed, and maintained by Andreas Eracleous. It’s developed with the latest front-end technology, built on GatsbyJS, mobile-first with Bootstrap, optimised for a fast page load, hosted on GitHub and served via Cloudflare.</p>
         </div>
         <div className="col-lg">
         <h4 className="h5 font-weight-normal">About</h4>
        <hr/>
         <ul className="nav flex-column">
         <li className="nav-item">
            <Link to="/hire-me" className="nav-link text-secondary text-capitalize">How to hire me</Link>
          </li>             
          <li className="nav-item">
            <Link to="/resume" className="nav-link text-secondary text-capitalize">Resume</Link>
          </li>        
        </ul>
         </div>
         <div className="col-lg">
         <h4 className="h5 font-weight-normal">Social</h4>
          <hr/>
         <SocialIcons icons={['twitter', 'github', 'linkedin']} className="p-3 text-secondary" size="2x" />        
         </div>
     </div>
     </div>
    <hr className="m-0 p-0"/>
      <div className="bg-opacity py-3">
     <div className="container d-flex flex-wrap">
       <p className="m-0 my-auto small">© {new Date().getFullYear()}, <Link to="/" className="text-decoration-none text-secondary"><span className="text-capitalize">{siteTitle}</span></Link> All Rights Reserved.</p>
       <nav className="ml-auto">
          <ul className="nav small">
            <li className="nav-item"><Link to="/privacy-policy" className="nav-link nav-link-footer text-secondary">Privacy Policy</Link></li>
            <li className="nav-item"><Link to="/terms-of-service" className="nav-link nav-link-footer text-secondary">Terms of Service</Link></li>
            <li className="nav-item"><Link to="/disclaimer" className="nav-link nav-link-footer text-secondary">Disclaimer</Link></li>
            <li className="nav-item"><Link to="/cookies-policy" className="nav-link nav-link-footer text-secondary">Cookie Policy</Link></li>
            <li className="nav-item"><a href="/sitemap.xml" className="nav-link nav-link-footer text-secondary">Sitemap</a></li>
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
