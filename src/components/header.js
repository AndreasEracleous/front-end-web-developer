import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import Menu from '../components/menu'

const Header = ({ siteTitle, siteOccupation, menuLinks }) => {
const [scrollPos, setScrollPos] = useState(0)
const [headerHeight, setHeaderHeight] = useState(2000)
const [heroBannerHeight, setHeroBannerHeight] = useState(2000)

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => { 
  const elHeader = document.getElementById("header");
  const elHeroBanner = document.getElementById("hero-banner");
  if(elHeader!==null && elHeroBanner!==null){
    setHeaderHeight(elHeader.offsetHeight)
    setHeroBannerHeight(elHeroBanner.offsetHeight)
    window.addEventListener('scroll', scrollFunction)
    return () => {
      window.removeEventListener("scroll", scrollFunction)
    };    
  }  
}, []);

const scrollFunction = () => {
  // Do something with the scroll position
  setScrollPos(window.scrollY)
}

  return (
    //Here goes logo, navigation, etc.
    <header id="header" className={`bg-primary ${scrollPos>(headerHeight + heroBannerHeight)?`fixed-top shadow-sm`:'pt-3'}`}>   
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to="/" className="name-brand text-decoration-none text-lightprimary">
            <span className="site-name text-capitalize font-weight-lighter">{siteTitle}</span>
            <span className="tagline text-uppercase d-block font-weight-lighter">{siteOccupation}</span>
          </Link>
          <Menu menuLinks={menuLinks} />
        </div>
      </div>
    </header>  
  )
}

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
