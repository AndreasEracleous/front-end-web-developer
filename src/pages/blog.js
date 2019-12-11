import React from "react"
import { graphql, Link } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import SocialIcons from '../components/social-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRss} from '@fortawesome/pro-light-svg-icons'
import Image from "../components/image"
import HeroHeader from "../components/hero-header"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPage = ({
  location,
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <Layout>
            <SEO title="Blog" />
            <HeroHeader className="text-center text-white">
                <h1 className="font-weight-normal">Blog <span className="small"><a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="text-warning"><FontAwesomeIcon icon={faRss} size="sm" /></a></span></h1>
                <h2 className="lead">Practical tips for responsive web design.</h2>
                <Breadcrumb location={location} crumbLabel="Blog" />
            </HeroHeader>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        {Posts}
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="bg-lightgray p-3 text-center ml-xl-5">
                            <Image filename="common/andreas.jpg" alt="" className="rounded-circle img-fluid mx-auto mb-3" style={{maxWidth:'130px'}} />
                            <p>Hi I'm <strong>Andreas Eracleous</strong> and I'm a <strong>Front-End Web Developer</strong>.<br/>Learn more <a href="/about">about me</a>.</p> 
						    <p>Welcome to my blog. I hope you find something useful here.</p>
						    <p>Follow me on <SocialIcons icons={['twitter']} className="text-primary" size="lg" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    }
export default BlogPage
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
`