import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Menu from './menu';

const Header = ({ siteTitle, siteOccupation, menuLinks }) => {
	return (
		<header id="header" className="pt-3">
			<div className="container">
				<div className="d-flex justify-content-between">
					<Link to="/" className="name-brand text-decoration-none text-dark">
						<span className="site-name text-capitalize font-weight-lighter">
							{siteTitle}
						</span>
						<span className="tagline text-uppercase d-block font-weight-lighter">
							{siteOccupation}
						</span>
					</Link>
					<Menu menuLinks={menuLinks} className="text-dark" />
				</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	siteTitle: ``,
	siteOccupation: ``,
};

Header.propTypes = {
	siteTitle: PropTypes.string,
	siteOccupation: PropTypes.string,
};

export default Header;
