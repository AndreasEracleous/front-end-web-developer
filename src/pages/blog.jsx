import React from 'react';
import { graphql, Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/second-header';
import Image from '../components/image';
import HeroHeader from '../components/hero-header';
import PostLink from '../components/post-link';
import ContextConsumer from '../components/context';

import SEO from '../components/seo';

const BlogPage = ({
	location,
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const Posts = edges
		.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map(edge => <PostLink key={edge.node.id} post={edge.node} />);

	const heroHeaderContent = (
		<div className="container py-5 text-center">
			<h1 className="font-weight-normal">
				Blog{' '}
				<span className="small">
					<a
						href="/rss.xml"
						target="_blank"
						rel="noopener noreferrer"
						className="text-warning"
					>
						<FontAwesomeIcon icon={faRss} size="sm" />
					</a>
				</span>
			</h1>
			<h2 className="lead mb-2 font-weight-normal">
				Practical tips for responsive web design.
			</h2>
			<Breadcrumb location={location} crumbLabel="Blog" />
		</div>
	);

	return (
		<>
			<SEO title="Blog" />
			{heroHeaderContent}
			<main className="container mb-5">
				<div className="row">
					{Posts}

					{/* <div className="col-lg-3 mt-4">
                          <div className="bg-white p-3 text-center shadow-sm rounded">
                              <Image filename="common/andreas.png" alt="" className="rounded-circle img-fluid mx-auto mb-3" style={{maxWidth:'130px'}} />
                              <p>Hi I'm <strong>Andreas Eracleous</strong> and I'm a <strong>Front-End Web Developer</strong>.<br/>Learn more <a href="/about">about me</a>.</p> 
                  <p>Welcome to my blog. I hope you find something useful here.</p>
                  <p>Follow me on <a href="https://twitter.com/AndrewEracleous" target="_blank" rel="noopener noreferrer" className="twitter-icon"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></p>
                          </div>
                      </div> */}
				</div>
			</main>
		</>
	);
};
export default BlogPage;
export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
					}
				}
			}
		}
	}
`;
