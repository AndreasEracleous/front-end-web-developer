import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import RegularLayout from './RegularLayout';
import AlternativeLayout from './AlternativeLayout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'assets/scss/main.scss';

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;
dom.watch();

export default ({ children, pageContext, location }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					occupation
					menuLinks {
						name
						link
					}
					socialLinks {
						facebook {
							name
							link
						}
						github {
							name
							link
						}
						instagram {
							name
							link
						}
						linkedin {
							name
							link
						}
						twitter {
							name
							link
						}
					}
				}
			}
		}
	`);
	console.log(location);
	if (pageContext.layout === 'special') {
		return <AlternativeLayout data={data}>{children}</AlternativeLayout>;
	}
	return <RegularLayout data={data}>{children}</RegularLayout>;
};
