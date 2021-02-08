import React from 'react';
import { graphql, Link } from 'gatsby';

import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { DiscussionEmbed } from 'disqus-react';
import Image from '../components/image';
import HeroHeader from '../components/hero-header';
import SEO from '../components/seo';

export default function Template({
	location,
	pageContext,
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { prev, next } = pageContext;
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html, excerpt } = markdownRemark;
	const { title, description, path, date, featuredImage } = frontmatter;

	const disqusConfig = {
		shortname: process.env.GATSBY_DISQUS_NAME,
		config: {
			identifier: path,
			title,
		},
	};
	return (
		<>
			<SEO title={title} description={excerpt} />
	
			<div className="container">
				<header className="mt-5 mb-3">
					<h1 className="font-weight-normal">{title}</h1>
					<small className="d-block my-auto">{date}</small>
					<Breadcrumb location={location} crumbLabel={title} />
				</header>
				<hr/>
				<article className="py-4">
					{
						// <Img fluid={featuredImgFluid} />
					}
					<Image
						filename={featuredImage}
						alt=""
						className="img-fluid mx-auto"
						style={{ maxWidth: '600px' }}
					/>
					<div
						className="blog-post-content mt-4"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</article>
				<div className="d-flex justify-content-between my-4">
					{prev && (
						<Link
							to={prev.frontmatter.path}
							className="btn btn-outline-primary"
						>
							Previous
						</Link>
					)}
					{next && (
						<Link
							to={next.frontmatter.path}
							className="btn btn-outline-primary"
						>
							Next
						</Link>
					)}
				</div>
				<DiscussionEmbed {...disqusConfig} />
			</div>
		</>
	);
}
export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				description
				featuredImage
			}
			html
			excerpt
		}
	}
`;
