import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/pro-light-svg-icons'

const Menu = ({menuLinks}) => {
    const mediaQuery = {
        desktop: 992,
        tablet: 768,
        phone: 576,
    };    
    const [mobileMenu, setMobileMenu] = useState(false); 
    const [windowWidth, setWindowWidth] = useState(mediaQuery.tablet);
    const handleResize = () => {
        setWindowWidth(document.body.clientWidth)
    }
    const toggleMobileMenu=()=> {
        windowWidth < mediaQuery.tablet && setMobileMenu(!mobileMenu);
    }
    useEffect(() => {
    console.log("useEffect");
    setWindowWidth(document.body.clientWidth)
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []); 
    return (
        <div id="mainNav" className="d-flex">
            <button className="btn btn-link text-decoration-none site-nav__open text-white my-auto" onClick={toggleMobileMenu}><FontAwesomeIcon icon={faBars} /> MENU</button>
            <nav className={`d-flex my-auto flex-column flex-md-row site-nav__list${mobileMenu?` site-nav__active`:``}`} onClick={toggleMobileMenu}>
                {menuLinks.map(link => (
                <Link to={link.link} key={link.name} className="nav-link font-weight-lighter text-lightprimary" activeClassName="active">
                    {link.name}
                </Link>
                ))}
            </nav>
        </div>
    )
}

export default Menu