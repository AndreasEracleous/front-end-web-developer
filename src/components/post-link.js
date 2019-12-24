import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <article className="mt-5">
    <header>
      <h2 className="h3 m-0 mb-1">
        <Link to={post.frontmatter.path} className="text-dark font-weight-bold">
          {post.frontmatter.title}
        </Link>
      </h2>
      <small className="font-weight-bold text-uppercase">{post.frontmatter.date}</small>
    </header>
    <p className="mt-3">{post.excerpt}</p>
    <Link to={post.frontmatter.path} className="text-primary font-weight-normal">Read</Link>
  </article>
)
export default PostLink