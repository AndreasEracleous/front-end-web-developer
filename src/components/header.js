import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "../components/image"
import Menu from '../components/menu'
import "../assets/scss/header.scss"

const Header = ({ siteTitle, siteOccupation, menuLinks }) => (
  //Here goes logo, navigation, etc.
  <header className="page-header bg-primary py-3">
    <div className="container">
      <div className="d-flex justify-content-between">
        <Link to="/" className="text-decoration-none text-secondary">
          <span className="h5 text-capitalize font-weight-lighter">{siteTitle}</span>
          <span className="small text-uppercase d-block font-weight-lighter">{siteOccupation}</span>
        </Link>
        <Menu menuLinks={menuLinks} />
      </div>
    </div>
  </header>  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

Header.propTypes = {
  siteOccupation: PropTypes.string,
}

Header.defaultProps = {
  siteOccupation: ``,
}

export default Header
