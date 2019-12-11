import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import HeroHeader from "../components/hero-header"

const HireMePage = () => (
  <Layout>
    <SEO title="How To Hire Me Directly For Your Job" />
    <HeroHeader className="text-center text-white">
        <h1 className="font-weight-normal">How To Hire Me Directly For Your Job</h1>
   </HeroHeader>
    <div className="container py-5">
        <Image filename="pages/hire-me.png" alt="Hire me" className="img-fluid" style={{maxWidth: '300px'}} />
        <p>As a freelancer, I am using UpWork platform for my works, where I can collaborate remotely, chat and share files over there in order to have all my clients in one place.</p>
        <p>Also as a benefit working in an online environment like the UpWork platform is that they provide a payment protection where they give security and peace of mind to client and freelancer to work together on both hourly and fixed-price projects. More info click <a href="https://support.upwork.com/hc/en-us/articles/211062568-Upwork-Payment-Protection?flash_digest=daab15a78efb0c50bdf021a6c7c4a2059cb9492f">here</a></p>
        <h3>How to hire me on Upwork</h3>
        <p><em><strong>Here's how to get started:</strong></em></p>
        <p><em>Send me directly invitation by click on the link:</em> <a href="https://www.upwork.com/signup/create-account/client_contact_freelancer?ciphertext=~~6d850ccbe5bc782d">https://www.upwork.com/signup/create-account/client_contact_freelancer?ciphertext=~~6d850ccbe5bc782d</a></p>
        <p>If you have completed the step below this mean that I have ready received an invitation for your job.</p>
        <p>Thank you for sending me an invitation we will be in touch soon. If you have questions, feel free to <a href="/contact/">contact me</a>.</p>
    </div>
  </Layout>
)

export default HireMePage
