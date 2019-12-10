import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components/image"

const WebsiteConversionPage = () => (
<Layout>
    <SEO title="Hire an Expert PSD to Bootstrap HTML Developer" description="Hire a PSD to Bootstrap HTML developer to convert your PSD design file to responsive web page." />
    <div className="bg-primary py-3">
        <div className="container text-center text-white">
        <h1 className="font-weight-normal">Hire an Expert PSD to Bootstrap HTML Developer</h1>
        </div>
    </div>      
    <div className="container py-5">
        <Image filename="pages/responsive-design-300x187.png" alt="Andreas Eracleous" className="img-fluid" style={{maxWidth: '300px'}} />
        <p>I help you to convert your design files (PSD, AI, PNG) to HTML and CSS responsive web layout, promise you fast turnaround time and Pixel-Perfect conversion. Pages are tested in all modern browsers and devices (Android, iPhone).</p>
        <p>I am ready to work on your project today, using my PSD to HTML conversion skills. I have over 10 years of web development experience that I can definitely help you to convert your PSD to HTML code.</p>
        <p>Most of all I will make sure that you will receive the best possible HTML conversion code, be cross browser compatible, so it will run in most important browsers and devices without any problems and make it a W3C compliant HTML5/CSS3 markup.</p>
        <p>In other words, I will make sure that your website will look perfect and beautifully in most devices!</p>
        <p>Not only that I will even optimize the conversion and the final code will be perfect and structured correctly so that your website will load faster.</p>
        <p><u>Note:</u> I develop responsive web design layouts using the latest Bootstrap-based grid system including all the JavaScript features.</p>
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
                <p><strong>PRICING OVERVIEW</strong></p>
                <p>Please provide me with an example of your design to review it. This will help me to do an estimation of my price for your project.</p>
                <p><strong>WHAT YOU’LL GET:</strong></p>
                <ul className="check-list">
                    <li className="check-list-item">High Quality Markup</li>
                    <li className="check-list-item">PSD to HTML, AI to HTML, PNG to HTML Conversion</li>
                    <li className="check-list-item">Mobile Device Compatibility</li>
                    <li className="check-list-item">Cross Browse Compatibility</li>
                    <li className="check-list-item">Optimization for Faster Load Speed</li>
                    <li className="check-list-item">Table less and SEO semantic coding standard</li>
                    <li className="check-list-item">100% Customer Satisfaction</li>
                </ul>
            </div>
        </div>
    </div>
</Layout>
)

export default WebsiteConversionPage
