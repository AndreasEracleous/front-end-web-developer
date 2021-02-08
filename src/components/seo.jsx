/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
	const { site, logo } = useStaticQuery(
		graphql`
			query {
				site {
					buildTime(formatString: "YYYY-MM-DD")
					siteMetadata {
						title
						description
						author
						siteUrl
					}
				}
				logo: file(relativePath: { eq: "icon.png" }) {
					childImageSharp {
						original {
							src
						}
					}
				}
			}
		`,
	);

	const metaDescription = description || site.siteMetadata.description;

	const schemaOrgWebPage = {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		url: site.siteMetadata.siteUrl,
		inLanguage: lang,
		mainEntityOfPage: site.siteMetadata.siteUrl,
		description: site.siteMetadata.description,
		name: site.siteMetadata.title,
		author: {
			'@type': 'Person',
			name: site.siteMetadata.author,
		},
		copyrightHolder: {
			'@type': 'Person',
			name: site.siteMetadata.author,
		},
		copyrightYear: new Date().getFullYear(),
		creator: {
			'@type': 'Person',
			name: site.siteMetadata.author,
		},
		publisher: {
			'@type': 'Person',
			name: site.siteMetadata.author,
		},
		// datePublished: '2019-01-18T10:30:00+01:00',
		dateModified: site.buildTime,
		image: {
			'@type': 'ImageObject',
			url: `${site.siteMetadata.siteUrl}${logo.childImageSharp.original.src}`,
		},
	};

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		>
			<script type="application/ld+json">
				{JSON.stringify(schemaOrgWebPage)}
			</script>
		</Helmet>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default SEO;
