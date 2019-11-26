import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteProfession, menuLinks }) => (
  <header className="page-header">
    <div className="container">
      <Link to="/">
        {siteTitle}
        {siteProfession}
      </Link>
      <h1>Are you looking for expert to convert your design into a web or a mobile app?</h1>
      <h2>

      </h2>
      <nav>
            <ul>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
  siteProfession: PropTypes.string,
}

Header.defaultProps = {
  siteProfession: ``,
}

export default Header
