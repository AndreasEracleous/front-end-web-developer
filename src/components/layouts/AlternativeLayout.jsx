/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { config, dom } from '@fortawesome/fontawesome-svg-core';
import {
	faHtml5,
	faCss3Alt,
	faJs,
	faReact,
	faNodeJs,
	faBootstrap,
	faSass,
	faTwitter,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import Header from '../header';
import Footer from '../footer';
import SEO from '../seo';
import Image from '../image';

const Layout = ({ data, children }) => {
	const {
		title,
		description,
		occupation,
		menuLinks,
		socialLinks,
	} = data.site.siteMetadata;
	const { twitter, linkedin, github } = socialLinks;

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
			<div className="hero-banner-bg-primary cloud-shape">
				<Header
					siteTitle={title}
					siteOccupation={occupation}
					menuLinks={menuLinks}
				/>
				<div className="container text-white pt-4 pb-5">
					<div className="row">
						<div className="col-lg-3 my-auto d-none d-lg-block">
							<Image
								filename="common/andreas.png"
								alt="Andreas Eracleous"
								className="portrait"
							/>
						</div>
						<div className="col-lg mt-5">
							<p className="h2 font-weight-bold text-capitalize">
								<span className="font-weight-light">Hi, I'm Andreas 👋. </span>
								I'm a front-end web developer building beautiful,
								mobile-responsive, accessible websites and web applications.
							</p>
							<hr />
							<p className="mb-1">
								Specialises in building <mark>responsive website</mark>,{' '}
								<mark>progressive web application</mark> and{' '}
								<mark>web performance optimization</mark>.
							</p>
							<p className="m-0">
								Lately, I focused primarily on <mark>ReactJS</mark>,{' '}
								<mark>GatsbyJS</mark>, <mark>GraphQL</mark> and{' '}
								<mark>NodeJS</mark> development.
							</p>
							<hr className="pb-0 mb-0" />
						</div>
					</div>
					{/*
                <h1 className="lead"><mark className="shadow-sm rounded-sm"><span className="font-weight-bold">Front-end web developer</span> for ReactJS, NodeJS, GatsbyJS and Bootstrap</mark></h1>
                */}

					<div className="d-none d-md-flex flex-wrap mt-3">
						<p className="my-auto font-weight-normal m-0">I'M GREAT AT:</p>
						<div className="d-flex flex-wrap text-center text-white">
							<div className="d-flex flex-column">
								<FontAwesomeIcon
									icon={faHtml5}
									size="3x"
									className="my-2 mx-4"
								/>
								<small>HTML5</small>
							</div>
							<div className="d-flex flex-column">
								<FontAwesomeIcon
									icon={faCss3Alt}
									size="3x"
									className="my-2 mx-4"
								/>
								<small>CSS3</small>
							</div>
							<div className="d-flex flex-column">
								<FontAwesomeIcon icon={faJs} size="3x" className="my-2 mx-4" />
								<small>JS</small>
							</div>
							<div className="d-flex flex-column">
								<FontAwesomeIcon
									icon={faBootstrap}
									size="3x"
									className="my-2 mx-4"
								/>
								<small>Bootstrap</small>
							</div>
							<div className="d-flex flex-column">
								<FontAwesomeIcon
									icon={faReact}
									size="3x"
									className="my-2 mx-4"
								/>
								<small>ReactJS</small>
							</div>
							<div className="d-flex flex-column">
								<FontAwesomeIcon
									icon={faNodeJs}
									size="3x"
									className="my-2 mx-4"
								/>
								<small>NodeJS</small>
							</div>
							<div className="d-flex flex-column">
								<FontAwesomeIcon
									icon={faSass}
									size="3x"
									className="my-2 mx-4"
								/>
								<small>SASS</small>
							</div>
						</div>
					</div>
					<hr />

					<div className="row">
						<div className="col-md-8">
							<p className="text-white font-weight-normal mb-0">
								A front end development with knowledge in back end development.
							</p>
						</div>
						<div className="col-md">
							<div className="d-flex justify-content-between ml-auto social-media-icons">
								<a
									href={twitter.link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-1 text-white"
								>
									<FontAwesomeIcon icon={faTwitter} size="2x" />
								</a>
								<a
									href={linkedin.link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-1 text-white"
								>
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
								</a>
								<a
									href={github.link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-1 text-white"
								>
									<FontAwesomeIcon icon={faGithub} size="2x" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<main>{children}</main>
			<Footer siteTitle={title} menuLinks={menuLinks} />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
