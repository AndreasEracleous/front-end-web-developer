import React from "react"
import { Link } from "gatsby"

const Menu = ({menuLinks}) => (
    <nav className="d-flex my-auto">
        {menuLinks.map(link => (
        <Link to={link.link} key={link.name} className="nav-link font-weight-lighter text-secondary" activeClassName="active">
            {link.name}
        </Link>
        ))}
    </nav>
)

export default Menu