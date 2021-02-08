import React from 'react';
import { Link } from 'gatsby';

import SEO from '../../components/seo';

const SetupWordpressPage = () => (
	<>
		<SEO title="Setup WordPress and Hosting" />
		<div className="container py-5">
			<h1 className="font-weight-normal mb-5">Setup WordPress</h1>
			<p>
				I can install WordPress into your existing hosting account (click here
				if you don’t have hosting), install your beautiful WordPress theme, plus
				all the most essential WordPress plugins that you need to help you grow
				your business faster and easier.
			</p>
			<div className="row">
				<div className="col-md mt-4">
					<div className="text-center bg-white shadow-sm rounded p-4">
						<i className="fal fa-envelope size-50 text-secondary mb-3" />
						<p>
							Need a project quote or more information about my services?
							<br />
							Click the button below for the fastest 24 hour response.
						</p>
						<Link to="/#contact" className="btn btn-lg btn-primary">
							Contact
						</Link>
						<small className="d-block text-secondary mt-2">
							Quick respond in 24 hours or less.
						</small>
					</div>
				</div>
				<div className="col-md mt-4">
					<strong>PRICING OVERVIEW</strong>
					<p>
						Get your WordPress installed for $50 and please let me know if you
						need futher plugins.
					</p>
					<p>
						<strong>WHAT YOU’LL GET:</strong>
					</p>
					<ul className="check-list">
						<li className="check-list-item">
							Professional WordPress installation
							<br /> (install database for WordPress plus fix any issues)
						</li>
						<li className="check-list-item">Install your WordPress Theme</li>
						<li className="check-list-item">
							Essentials WP Plugins:
							<br />
							<small>
								<em>Akismet</em>, <em>Yoast SEO</em>, <em>Google Analytics</em>,{' '}
								<em>Google XML Sitemaps</em>, <em>Contact form 7</em>
							</small>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</>
);

export default SetupWordpressPage;
