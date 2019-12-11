import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from '../components/menu'

const Header = ({ siteTitle, siteOccupation, menuLinks }) => (
  //Here goes logo, navigation, etc.
  <header id="goTop" className="pt-3 bg-primary">   
    <div className="container">
      <div className="d-flex justify-content-between">
        <Link to="/" className="text-decoration-none text-lightprimary">
          <span className="site-name text-capitalize font-weight-lighter">{siteTitle}</span>
          <span className="tagline text-uppercase d-block font-weight-lighter">{siteOccupation}</span>
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
