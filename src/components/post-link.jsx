import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
	<div className="col-md-4 mt-4">
		<article className="d-flex flex-column h-100 mt-4 bg-white shadow rounded p-4">
			<header>
				<h2 className="h4 m-0 mb-1">
					<Link
						to={post.frontmatter.path}
						className="text-dark font-weight-bold"
					>
						{post.frontmatter.title}
					</Link>
				</h2>
				<small className="font-weight-bold text-uppercase">
					{post.frontmatter.date}
				</small>
			</header>
			<p className="mt-3">{post.excerpt}</p>
			<Link
				to={post.frontmatter.path}
				className="text-primary font-weight-normal ml-auto mt-auto"
			>
				Read
			</Link>
		</article>
	</div>
);
export default PostLink;
