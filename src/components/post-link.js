import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <article className="mt-5">
    <header>
      <h2 className="h4 m-0">
        <Link to={post.frontmatter.path} className="text-dark font-weight-bold">
          {post.frontmatter.title}
        </Link>
      </h2>
      <small className="font-weight-normal">{post.frontmatter.date}</small>
    </header>
    <p className="mt-2">{post.excerpt}</p>
  </article>
)
export default PostLink