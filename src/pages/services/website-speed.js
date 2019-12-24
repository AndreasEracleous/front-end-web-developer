import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const WebsiteSpeedPage = () => (
  <Layout>
    <SEO title="Optimize Website Speed" />
    <div className="bg-primary py-3">
        <div className="container text-center text-white">
        <h1 className="font-weight-normal">Optimize Website Speed</h1>
        </div>
    </div>       
    <div className="container py-5">
    <p>I will optimize your existing website code and improve your website’s page loading speed. I will make sure that most issues (that slow up your website speed) will be fixed. I check issues by using greatest tools out there, such as Google PageSpeed, Gtmetrix &amp; WebPageTest</p>
<div className="row">
	<div className="col-md mt-4">
			<div className="text-center border border-secondary py-5">
		  <i className="fal fa-envelope size-50 text-secondary mb-3"></i>	
		  <p>Need a project quote or more information about my services?<br/>Click the button below for the fastest 24 hour response.</p>		
      <Link to="/#contact" className="btn btn-lg btn-success">Contact</Link>		  <small className="d-block text-secondary mt-2">Quick respond in 24 hours or less.</small>
		</div>	
	</div>
	<div className="col-md mt-4">
		<p><strong>PRICING OVERVIEW</strong></p>
<p>Please tell me your website URL to review it. This will help me to do an estimation of my price for your project.</p>
<p><strong>WHAT YOU’LL GET:</strong></p>
<ul className="check-list">
<li className="check-list-item">Optimize images</li>
<li className="check-list-item">Minify CSS &amp; JavaScript</li>
<li className="check-list-item">Leverage browser caching</li>
<li className="check-list-item">Eliminate render-blocking resources above the fold</li>
<li className="check-list-item">Enable compressionv</li>
<li className="check-list-item">Optimize the mobile experience</li>
</ul>
	</div>
</div>	
    </div>
  </Layout>
)

export default WebsiteSpeedPage
