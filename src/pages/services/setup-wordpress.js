import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components/image"

const SetupWordpressPage = () => (
<Layout>
    <SEO title="Setup WordPress and Hosting" />
    <div className="bg-primary py-3">
        <div className="container text-center text-white">
        <h1 className="font-weight-normal">Setup WordPress</h1>
        </div>
    </div>       
    <div className="container py-5">
        <p>I can install WordPress into your existing hosting account (click here if you don’t have hosting), install your beautiful WordPress theme, plus all the most essential WordPress plugins that you need to help you grow your business faster and easier.</p>
        <div className="row">
            <div className="col-md mt-4">
                <div className="text-center border border-secondary py-5">
                    <i className="fal fa-envelope size-50 text-secondary mb-3"></i>
                    <p>Need a project quote or more information about my services?
                        <br/>Click the button below for the fastest 24 hour response.</p>
                    <script>
                        mail2("andrew.eracleous", "gmail", 0, "", "Ask For A Quote", "btn btn-lg btn-success text-uppercase mt-4")
                    </script>
                    <small className="d-block text-secondary mt-2">Quick respond in 24 hours or less.</small>
                </div>
            </div>
            <div className="col-md mt-4">
                <strong>PRICING OVERVIEW</strong>
                <p>Get your WordPress installed for $50 and please let me know if you need futher plugins.</p>
                <p><strong>WHAT YOU’LL GET:</strong></p>
                <ul className="check-list">
                    <li className="check-list-item">Professional WordPress installation
                        <br/> (install database for WordPress plus fix any issues)</li>
                    <li className="check-list-item">Install your WordPress Theme</li>
                    <li className="check-list-item">Essentials WP Plugins:
                        <br/>
                        <small><em>Akismet</em>, <em>Yoast SEO</em>, <em>Google Analytics</em>, <em>Google XML Sitemaps</em>, <em>Contact form 7</em></small>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</Layout>
)

export default SetupWordpressPage
