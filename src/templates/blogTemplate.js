import React from "react"
import { graphql } from "gatsby"

import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"

export default function Template({
  location,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  console.log(frontmatter)
  const { title, description, path, date } = frontmatter

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: path, title },
  }
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <div className="bg-primary py-3">
        <div className="container text-center text-white">
          <h1 className="font-weight-normal">{title}</h1>
          <Breadcrumb location={location} crumbLabel={title} />
        </div>
      </div>
      <div className="container pt-2">
        <article className="py-3">
        <header>
          <small className="d-block mb-4">{date}</small>
        </header>  
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </article>
        <DiscussionEmbed {...disqusConfig} />
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
      html
      excerpt
    }
  }
`