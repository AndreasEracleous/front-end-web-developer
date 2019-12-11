import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Image from "../components/image"
import HeroHeader from "../components/hero-header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"

export default function Template({
  location,
  pageContext,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { prev, next } = pageContext
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const { title, description, path, date, featuredImage } = frontmatter

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: path, title },
  }
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <HeroHeader/>
      <div className="container pt-2">
        <Breadcrumb location={location} crumbLabel={title} className="text-dark" />
        <article className="py-4">
        <header>
          <h1 className="font-weight-bold">{title}</h1>
          <small className="d-block mb-4">{date}</small>
        </header>  
        {
       // <Img fluid={featuredImgFluid} />
        }
        <Image filename={featuredImage} alt="" className="img-fluid mx-auto" style={{maxWidth: '600px'}} />

        <hr className="mb-4"/>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </article>
        <div className="d-flex justify-content-between my-4">
          {prev && (
                <Link to={prev.frontmatter.path} className="btn btn-outline-primary">Previous</Link>
            )}
            {next && (
                <Link to={next.frontmatter.path} className="btn btn-outline-primary">Next</Link>
            )}     
          </div>
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
        featuredImage   
      }
      html
      excerpt
    }
  }
`