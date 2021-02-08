/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import SEO from '../seo';
import Header from '../second-header';
import Footer from '../footer';

const Layout = ({ data, children }) => {
	const { title, description, occupation, menuLinks } = data.site.siteMetadata;

	return (
		<>
			<Helmet
				meta={[
					{
						name: 'google-site-verification',
						content: 'xa0E3FvD7H7xRhk5pdtp0gG4dcnAAoL1D4F-VzPPAcE',
					},
				]}
			/>
			<SEO title={occupation} description={description} />
			<Header
				siteTitle={title}
				siteOccupation={occupation}
				menuLinks={menuLinks}
			/>
			{children}
			<Footer siteTitle={title} menuLinks={menuLinks} />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
